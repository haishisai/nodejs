let express = require('express');
let services = require('../services')
let router = express.Router();

router.post('/', async (req, res) => {
  res.header('Set-Cookie','bb=444')
  res.send('113344')
  console.log('test ok')
})
router.get('/1', async (req, res) => {
  res.header('Set-Cookie','cc=1')
  res.send('aaa')
  console.log('test ok1')
})

module.exports = router