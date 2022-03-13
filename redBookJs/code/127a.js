let colorText = "red, blue, green, yellow";
let colors1 = colorText.split(",");
let colors2 = colorText.split(",",2);
let colors3 = colorText.split(/[^,]+/);
console.log(colors1);
console.log(colors2);
console.log(colors3);
