var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.get('/', handle.testApi)

module.exports = router