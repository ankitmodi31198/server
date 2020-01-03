// local modules
const db = require('../models')

/* 
* @function = create the food
* @uses = user data, cusines, ingredients
* @created = @02-01-2020 -jash
*/
exports.createFood = async (req, res, next) => {
    try {
        var {username} = req.body
        var newFoodBody = req.body

        var newFood = {
            name: newFoodBody.name,
            category: {
                veg: newFoodBody.veg,
                nonVeg: newFoodBody.nonVeg,
                special: {
                    jain: newFoodBody.jain,
                    swaminarayan: newFoodBody.swaminarayan,
                    faradi: newFoodBody.faradi
                }
            },
            cusine: newFoodBody.cusine, //send the _id of cusine
            ingredients: newFoodBody.ingredients, //send the array!
            servings: newFoodBody.servings,
            recipe: {
                step: newFoodBody.step //send steps in an array
            },
            user: newFoodBody.user
        }

        var food = new db.Food(newFood)

        await food.save()

        res.json({success: true, msg: 'food created', food})
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

/* 
* @function = view the particular food item
* @uses = food data anyone can see
* @created = @03-01-2020 -jash
*/
exports.viewFood = async (req, res, next) => {
    try {
        // send the food id of the item to view from the front-end
        var foodId = req.params.fid

        var food = await db.Food.find({
            _id: foodId
        })
        res.json({food, success: true, msg: "food item found"})
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

/* 
* @function = view MY particular food item
* @uses = food data only my food
* @created = @03-01-2020 -jash
*/
exports.viewMyFood = async (req, res, next) => {
    try {
        var {fid: foodId, uid: userId} = req.params

        var food = await db.Food.findOne({
            _id: foodId,
            user: userId
        })

        if (food.length !== 0) {
            res.json({food, success: true, msg: "your food item found."})
        } else {
            res.json({success: false, msg: "no such food item uploaded by you."})
        }
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

/* 
* @function = view all foods
* @uses = food data
* @created = @03-01-2020 -jash
*/
exports.viewFoods = async (req, res, next) => {
    try {
        var foods = await db.Food.find()

        res.json({foods, success: true, msg: "all food items here."})
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

/* 
* @function = delete my food
* @uses = food data
* @created = @03-01-2020 -jash
*/
exports.deleteMyFood = async (req, res, next) => {
    try {
        var {fid: foodId, uid: userId} = req.params

        await db.Food.deleteOne({
            _id: foodId,
            user: userId
        })

        res.json({success: true, msg: "food deleted successfully"})
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}