const fs = require("fs");
const { text } = require("stream/consumers");

const hello = "Hello world";
console.log(hello);
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}\nCreate on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);

