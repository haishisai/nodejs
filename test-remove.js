var models = require("./models");

async function test() {
 
  // var result = await models.News.deleteOne() //删除一条  第一条
  var result = await models.User.deleteMany() //删除多条  不写条件就是全部  

  // 增加筛选条件删除
  // var result = await models.News.deleteOne({
  //   _id: "5ed4a82038b45216b47be2a1",
  // })
  console.log(result);
}
test();