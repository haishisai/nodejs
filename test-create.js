var models = require("./models");
var users = require("./users.json");
var news = require("./news.json");

async function addUsers() {
  await models.User.create(users);
  console.log("添加用户测试数据成功！！！");
}

// addUsers();

async function addNews() {
  await models.News.create(news);
  console.log("添加新闻测试数据成功！！！");
}

addUsers()
addNews();