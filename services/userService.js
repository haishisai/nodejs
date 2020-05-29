var User = require("../models").User;

// 注册一个用户
// userObj：用户对象
// 返回：新注册的用户对象
exports.reg = async function (userObj) {
  var result = await User.create(userObj);
  return result;
};

// 查找
// async function test () {
//   var result = await User.findById("5ecf187856fe7f2f70b3d20d")
//   console.log(result)
// }
// async function test () {
//   var result = await User.find({
//     role : 'VIP'
//   })
//   console.log(result)
// }
// test()


// 登录
// loginId: 账号
// loginPwd: 密码
// 返回：登录成功返回用户对象，登录失败返回null
exports.login = async function (loginId, loginPwd) {
  var result = await User.find({
    loginId: loginId,
    loginPwd: loginPwd,
  });
  if (result.length === 0) {
    return null;
  }
  return result[0];
};

// 查找用户
// id: 用户的唯一编号
// 返回：用户对象，用户不存在返回null
exports.getUser = async function (id) {};
