console.log('a1')
var cc = require("./b.js");

console.log('a2')

let tools = require("./tools");

let num = tools.randomNumber(3,6)

console.log(cc)

console.log(num)

// exports 只是为了导出变量 ， b.js 里的 命令 不用exports 一样会导出  
// exports 输出 比命令慢