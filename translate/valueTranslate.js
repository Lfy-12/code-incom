const axios = require("axios")
const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')
const MD5 = require('./MD5')

// 需要翻译的文件路径 
const baseUrl = './src/locales/ko_KR'
// 百度翻译开放平台 通用翻译的参数
const appid = '20211206001020289'
const key = 'nrSQarszudD1VWdqTk3N'
const from = 'zh'
const to = 'kor'

const reg1 = /:\s*'([^']*)'/g
const reg2 = /:\s*"([^"]*)"/g

const map = JSON.parse(fs.readFileSync('./map.js').toString())
const fileList = []

async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function translateValue(value) {
  let salt = (new Date).getTime();
  let query = value;
  // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
  let str1 = appid + query + salt + key;
  let sign = MD5(str1);
  let res = await axios.get('http://api.fanyi.baidu.com/api/trans/vip/translate', {
      params: {
          q: query,
          appid: appid,
          salt: salt,
          from: from,
          to: to,
          sign: sign
      }
  })
  return res.data.trans_result[0].dst
}

const exec = async (reg, str, file) => {
  let res;
  // 反复调用 exec() 方法来遍历字符串中的所有匹配文本
  do {
    res = reg.exec(str);
    if (res && res[1]) {
      if (!map[res[1]]) {
        console.log(res[1]);
        let resValue = await translateValue(res[1])
        await sleep(100)

        map[res[1]] = resValue
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
  const map = JSON.parse(fs.readFileSync('./map.js').toString())
  const fileList = JSON.parse(fs.readFileSync('./fileList.js').toString())

  fileList.forEach(async file => {
    try {
      const res = fs.readFileSync(file)
      const data = res.toString()
      
      let tData = data.replace(reg1, function (match, $1) {
        return `: "${map[$1]}"`
      })
      tData = tData.replace(reg2, function (match, $1) {
        return `: "${map[$1]}"`
      })

      fs.writeFileSync(file, tData)

    } catch (err) {
      console.log(err)
    }
  })
}

async function tarverse() {
  await myReaddir(path.join(__dirname, baseUrl))

  await generate()

  fs.writeFileSync(path.join(__dirname, './map.js'), JSON.stringify(map, null, 2))
  fs.writeFileSync(path.join(__dirname, './fileList.js'), JSON.stringify(fileList, null, 2))
}

// tarverse()
transfer()