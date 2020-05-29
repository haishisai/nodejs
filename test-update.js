var models = require("./models");

async function test() {
  // 把id等于5ecbc338cc42ac3880b689e8的文档进行更新
  // 用 {channel: "财经焦点" } 覆盖旧文档
  var result = await models.News.updateOne(
    {
      _id: "5ecbc338cc42ac3880b689e8",
    },
    {
      channel: "财经焦点",
    }
  );
  console.log(result);
}
test();
