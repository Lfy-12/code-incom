let uri01 = "http://www.wrox.com/illegal value.js#start";
console.log(encodeURI(uri01));
console.log(encodeURIComponent(uri01));

let uri02 = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
console.log(decodeURI(uri02));
console.log(decodeURIComponent(uri02));