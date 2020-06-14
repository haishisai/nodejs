let express = require('express');
let services = require('../services')
let router = express.Router();

router.get('/1', async (req, res) => {
  res.send('113344')

})


module.exports = router