// 测试

var services = require("./services");

async function test() {
  var result = await services.newsService.getNews(2, 3, "新冠");
  console.log(result);
}

test();
