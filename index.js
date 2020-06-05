let express = require('express');
let cookieParser = require('cookie-parser')
let app = express()
let path = require('path')

secret = 'pd'
app.use(cookieParser(secret))

app.use(require('./middleware/LoginUser'))
app.use(require('./middleware/Permission'))


// 搭建一个静态资源服务器   
app.use(express.static(path.resolve(__dirname, 'public')))

// 对应带消息体的请求   自己能能处理处理 不能向后移交
// content-Type:    application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))
// content-Type: application/ json
app.use(express.json());

// 路由中间件
app.use('/api/user', require('./routes/user'))
app.use('/api/news', require('./routes/news'))

app.listen(9527, () => {
  console.log('server listening on 9527')
})
