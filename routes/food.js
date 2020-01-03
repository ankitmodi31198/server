var express = require('express');
var router = express.Router();
var handle = require('../handlers')

/*
* "username" of the logged in user will be sent from the front-end through the body.
*/
router.post('/create', handle.createFood)
/*
* find the food item
*/
router.get('/:fid', handle.viewFood)
/*
* find my food item
*/
router.get('/:fid/:uid', handle.viewMyFood)
/*
*find all foods
*/
router.get('/', handle.viewFoods)
/*
* delete the food
*/
router.get('/delete/:fid/:uid', handle.deleteMyFood)
module.exports = router