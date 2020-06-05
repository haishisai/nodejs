let services = require('../services')

module.exports = async function(req, res, next){
  // 如果能通过cookie得到用户,将用户保存到 req.user中
  var userid = req.signedCookies.token;
  if(!userid){
    req.user = null
  }
  else{
    let user = await services.userService.getUser(userid);
    req.user = user
  }
  // 否则 req.user = null
  next()
}