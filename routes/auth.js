var express = require('express');
var router = express.Router();
var handle = require('../handlers')

// for registering user for the first time
router.post('/register', handle.registerUser)

// for logging user
router.post('/login', handle.loginUser)

module.exports = router