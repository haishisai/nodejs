let express = require('express');
let app = express()
let path = require('path')
let fs = require('fs')



// 搭建静态资源服务器的 基本原理
async function handler (req, res) {
  // 获取文件路径    
  console.log(req.path)
  var filename = path.resolve(__dirname, 'public' + req.path);
  async function getSend () {
    let content = await fs.promises.readFile(filename); // 获取文件内容
    let extname = path.extname(filename); //获取文件后缀名
    res.type(extname)
    res.send(content)
  }
  //  await  的命令 要反正try里
  try {
    let stat = await fs.promises.stat(filename);  // 判断是文件 还是 文件夹 还是 无此路径报错  所以一定要在try里
    if (stat.isFile()) {
      // 是文件
      getSend()
    } else {
      // 是目录  这样写有漏洞  如果有文件夹 里面没有index.hmtl 就会出错
      filename += '\\index.html'
      getSend()
    }
  } catch (err) {
    res.status(404);
    res.send('页面不存在')
  }
}

app.get('*', handler);

app.listen(9527, () => {
  console.log('server listening on 9527')
})