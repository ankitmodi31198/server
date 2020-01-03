var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.get('/', handle.testApi)
router.get('/name-message', handle.nameMessage)

module.exports = router