let express = require('express');
let router = express.Router();
let services = require('../services')


router.get('/', async (req, res) => {
  let page = +req.query.page || 1
  let limit = +req.query.limit || 10
  console.log(req.query)
  let result = await services.newsService.getNews(page, limit, '')
  res.send({
    data: result
  })
})

module.exports = router