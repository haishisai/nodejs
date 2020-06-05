let express = require('express');
let app = express()
let path = require('path')
let fs = require('fs')


// __dirname 是文件所在的文件夹的路径  __filename是文件的绝对路径


// 搭建一个静态资源服务器   
// 自己能处理自己处理 自己不能交给下一个中间件
app.use(express.static(path.resolve(__dirname, 'public')))

// 对应带消息体的请求   自己能能处理处理 不能向后移交
app.use(express.urlencoded({ extended: true}))
//
app.use(express.json());


//路由中间件  原理
let router = express.Router();

// 精确匹配 /api/user
router.get('/', (req, res) => {})
// 精确匹配 /api/user/a
router.get('/a', (req, res) => {})
// 精确匹配 /api/user
router.post('/', (req, res) => {})
// 基础路径 /api/user
app.use('/api/user', router);

app.post('/login', (req, res) => {
  console.log(req.body)
})


app.listen(9527, () => {
  console.log('server listening on 9527')
})
