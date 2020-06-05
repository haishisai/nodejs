// 测试

// var services = require("./services");


// async function test() {
//   var result = await services.newsService.getNews(2, 3, "新冠");
//   console.log(result);
// }

var express = require('express');
var app = express(); // 创建一个web服务器

// req request 请求对象  res 响应对象
app.get('/news', function (req ,res) {
  console.log('aaa')
})

app.get('/news/:year/:month', function (req ,res) {
  console.log(req.path)
  console.log(req.query) // 问号后面的内容 是个对象
  res.send('hello pd')
})

app.get('/test', function (req ,res) {
  res.type('js');
  res.send('alert(123)')
})

app.get('/test2', function (req ,res) {
  res.status(302)
  res.header('location', 'http://www.baidu.com');
  res.redirect('http://www.baidu.com') // 和上面一样
  res.send(null)
})


app.post('/login', (req, res) => {
  console.log('login')
})

app.listen(9527, function () {
  console.log("server listening on 9527")
})