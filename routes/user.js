//

let express = require('express');
let services = require('../services')
let router = express.Router();

router.post('/login', async (req, res) => {
  try {
    let result = await services.userService.login(
      req.body.loginId,
      req.body.loginPwd
    )
    if (!result) {
      res.send({
        err: '账号和密码错误'
      })
    }
    // 登陆成功
    // res.header('set-cookie','aaa=111')  这是一种原始方法
    // 使用插件cookie-parser
    res.cookie('token', result._id, {
      path: '/',
      maxAge: 3600 * 1000 * 24, // 单位毫秒
      signed: true   // 启用后, 会使用之前配置的私钥 进行加密
    })
    res.send(result)
  } catch (err) {
    res.send({
      err: err.message
    })
  }


})

router.post('/reg', async (req, res) => {
  req.body.role = '普通用户'
  try {
    let result = await services.userService.reg(req.body)
    res.send(result)
  } catch (err) {
    res.send({
      err: err.message
    })
    console.log(err.message)
  }
})

router.get('/who', async (req, res) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.send({
      err: '没有登录，或token已过期'
    })
  }

})



// 导出中间件  中间件本质就是一个函数 所以用module的方式 还原导出
module.exports = router