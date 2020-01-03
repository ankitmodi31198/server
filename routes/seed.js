var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.get('/cusine', handle.seedCusine)
router.get('/ingredient', handle.seedIngredient)

module.exports = router;