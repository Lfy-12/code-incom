const axios = require("axios");
const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')
const { pinyin } = require('pinyin-pro');

// 判断是不是中文 \u4e00-\u9fa5
// () 为了提取匹配字符串的，表达式中有几个()就有几个相应的匹配字符串  $1 $2 $3...
// [] 定义匹配的字符范围。比如[a-zA-Z0-9]表示匹配英文字符和数字。[\s*表示空格或者*号]
// + 一次或多次   * 零次或多次   ? 零次或一次
//  (1)''   (2)""   (3) > <    (4) =''   (5) =""  (6)``
//   /'([\u4e00-\u9fa5]+)'/g  
//   /'([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，:：()...]*)'/g
const reg1 = /'([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，,:：()...]*)'/g
const reg2 = /"([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，,:：()...]*)"/g
const reg3 = />\s*([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，,:：()...]*)\s*</g
const reg4 = /=\s*'([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，,:：()...]*)'/g
const reg5 = /=\s*"([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，,:：()...]*)"/g
const reg6 = /`([\u4e00-\u9fa5][\u4e00-\u9fa5a-zA-Z0-9?？!！%，,:：()...]*)`/g

const list = new Set()
const unique = []
const map = {}
const fileList = []

function create(file) {
  const arr = file.split('\\').slice(6)
  return arr.join('-').split('.')[0].replace(/\-/g, '.')
}

// 弃用
async function translateToID(value) {
  const str = encodeURI(value);
  // 有道翻译api  发送请求 (接口不可用时,请自主替换)
  const res = await axios.get('http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=' + str)
  let resID = res.data.translateResult[0][0].tgt
  // 预处理 转ID 驼峰命名
  if (resID.indexOf(" ") != -1) {  // 翻译结果为多个单词
    resID = resID.split(' ')
    // 去除翻译中的(),'  为了省事，直接筛掉含这些的单词
    resID = resID.filter( v => !(v.includes("(") || v.includes(")") ||  v.includes("'") ||  v.includes(","))  )
    // 翻译结果 英文太长 进行裁剪
    if (resID.length > 5) {
      resID = resID.filter(v => {
        return v.length > 5
      })
    }
    resID = resID.map((v, k) => {
      // 驼峰命名
      if (k == 0) return v.toLowerCase()
      return v.charAt(0).toUpperCase() + v.slice(1)
    }).join('')
  }
  return resID
}

async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const exec = async (reg, str, file) => {
  let res;
  // 反复调用 exec() 方法来遍历字符串中的所有匹配文本
  do {
    res = reg.exec(str);
    if (res && res[1]) {
      const f = create(file)
      if (!unique.includes(res[1])) {

        // 用英文来作为umi国际化占坑id  intl.formatMessage({id:'XXX'})  缺点：翻译速度慢
        // let resID = await translateToID(res[1])
        // await sleep(500)

        // 用拼音来作为umi国际化占坑id 
        let resID = pinyin(res[1],{ toneType: 'none', type: 'array' }).join('');

        unique.push(res[1])
        list.add(`${res[1]}.${f}`)
        map[`${f}.${resID}`] = res[1]
      }
    }
  } while (res)
}

async function readFile(filePath) {
  try {
    // 返回一个Stats对象，其中包含文件路径的详细信息
    const stats = fs.statSync(filePath)
    // 判断是否为文件 true false
    const isFile = stats.isFile();
    // 判断是否为目录 true false
    const isDir = stats.isDirectory();
    if (isFile) {
      fileList.push(filePath)
    }
    if (isDir) {
      await myReaddir(filePath)
    }
  } catch (err) {
    console.log(err)
  }
}

async function readFiles(dir, files, index = 0) {
  if (index < files.length) {
    const filePath = path.join(dir, files[index])
    await readFile(filePath)
    await readFiles(dir, files, index + 1)
  }
}

async function myReaddir(dir) {
  try {
    // fsPromises.readdir 读取目录内容 返回目录中文件的名称数组（不包括 '.' 和 '..'）
    const files = await readdir(dir)
    await readFiles(dir, files)
  } catch (err) {
    console.log(err)
  }
}

async function generateMap(file) {
  try {
    // 读文件
    const data = fs.readFileSync(file).toString()
    await exec(reg1, data, file)
    await exec(reg2, data, file)
    await exec(reg3, data, file)
    await exec(reg4, data, file)
    await exec(reg5, data, file)
    await exec(reg6, data, file)
  } catch (err) {
    console.log(err)
  }
}

async function generate(index = 0) {
  if (index < fileList.length) {
    await generateMap(fileList[index])
    await generate(index + 1)
  }
}

async function transfer() {
  const o = require('./map')

  const map = Object.keys(o).reduce((obj, key) => {
    obj[o[key]] = key
    return obj
  }, {})

  const fileList = require('./fileList')

  fileList.forEach(async file => {
    let flag = false;
    try {
      const res = fs.readFileSync(file)
      const data = "import { useIntl } from 'umi';\r\n" + res.toString()
      // const data = res.toString()
      
      // 注意匹配的顺序  
      let tData = data.replace(reg4, function (match, $1) {
        flag = true;
        return `={intl.formatMessage({ id: '${map[$1]}' })}`
      })

      tData = tData.replace(reg5, function (match, $1) {
        flag = true;
        return `={intl.formatMessage({ id: '${map[$1]}'})}`
      })

      tData = tData.replace(reg1, function (match, $1) {
        flag = true;
        return "`${intl.formatMessage({ id: '" + map[$1] + "'})}`"
      })
      tData = tData.replace(reg6, function (match, $1) {
        flag = true;
        return "`${intl.formatMessage({ id: '" + map[$1] + "'})}`"
      })
      tData = tData.replace(reg2, function (match, $1) {
        flag = true;
        return "`${intl.formatMessage({ id: '" + map[$1] + "'})}`"
      })
      tData = tData.replace(reg3, function (match, $1) {
        flag = true;
        return ">{ intl.formatMessage({ id: '" + map[$1] + "'}) }<"
      })

      if(flag) {
        tData = "import { useIntl } from 'umi';\r\n" + tData
        fs.writeFileSync(file, tData)
      }
    } catch (err) {
      console.log(err)
    }
  })
}

async function tarverse() {
  await myReaddir(path.join(__dirname, './src/pages'))
  // await myReaddir(path.join(__dirname, './src/pages/member/memberEvaluate'))

  await generate()

  fs.writeFileSync(path.join(__dirname, './list.js'), JSON.stringify(Array.from(list), null, 2))
  fs.writeFileSync(path.join(__dirname, './map.js'), JSON.stringify(map, null, 2))
  // string.endsWith('XXX')  是否以XXX结尾
  fs.writeFileSync(path.join(__dirname, './fileList.js'), JSON.stringify(fileList.filter(file => file.endsWith('tsx') || file.endsWith('ts')), null, 2))
}

// 先执行第一个方法，生成三个文件夹
tarverse()
// 再执行第二个方法，进行umi国际化 intl.formatMessage({id:'resID'}) 替换
// transfer()