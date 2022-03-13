let message = "ab😊de";

console.log(message.length);
console.log("");

console.log(message.charAt(1));
console.log(message.charAt(2));
console.log(message.charAt(3));
console.log(message.charAt(4));
console.log("");

//charCodeAt() 与 codePointAt()
console.log(message.charCodeAt(1)+" "+message.codePointAt(1));
console.log(message.charCodeAt(2)+" "+message.codePointAt(2));//55357 128522
console.log(message.charCodeAt(3)+" "+message.codePointAt(3));//56842 56842
console.log(message.charCodeAt(4)+" "+message.codePointAt(4));
console.log("");

// fromCharCode() 与 fromCodePoint()
console.log(String.fromCharCode(97,98,55357,56842,100,101));
console.log(String.fromCodePoint(97,98,128522,100,101));
console.log("");

console.log(String.fromCodePoint(0x1F60A));