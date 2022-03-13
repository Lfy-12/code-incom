const options01 = [ , , , , , ];
console.log(options01.length);

const options02 = [,1, , , ,5,];
console.log(options02.length);

const options = [1, , , ,5];
for(const option of options){
  console.log(option === undefined);
}
