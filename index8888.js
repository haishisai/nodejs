let express = require('express');
let app = express();
let cors = require('cors')
app.use(cors({
  credentials: true,
  origin: 'http://localhost:9527'
}));

//
let cookieParser = require('cookie-parser')

// 获取消息体  2种格式
// Content-Type: application/x-www-from-urlencoded
app.use(express.urlencoded({ extended: true}));
// Content-Type: application/json
app.use(express.json())



app.use(cookieParser('aa'))





app.post('/test',function (req, res) {
  console.log(req.body)
  res.cookie('abc','fdjsakgjl;e',{
    path: '/',
    domain: 'localhost'
  })
  res.send('11')
})

app.listen(8888, function () {
  console.log("server listening on 8888")
})