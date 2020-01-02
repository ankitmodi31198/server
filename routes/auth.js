var express = require('express');
var router = express.Router();
var handle = require('../handlers')

// for registering user for the first time
router.post('/register', handle.registerUser)

module.exports = router