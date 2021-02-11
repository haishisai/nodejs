var models = require("./models");

// async function test() {
//   var result = await models.News.findById("5ecbc338cc42ac3880b689e8");
//   console.log(result);
// }

// 获得最新发布的新闻（1条）
// async function test() {
//   var result = await models.News.find(
//     {},
//     "title pubDate",
//     {
//       sort: "-pubDate",
//       limit: 1
//     }
//   );
//   console.log(result);
// }


async function test() {
  var result = await models.News.countDocuments({
    channel: "财经焦点",
  });
  console.log(result);
}

async function test4(keyWord) {
  console.log(keyWord)
  let reg = new RegExp(keyWord)
  let res = await models.News.find({
    $or: [
      {
        content : reg
      },
      {
        hannel : reg
      }
    ]
  })
  console.log(res)
} 
test4()