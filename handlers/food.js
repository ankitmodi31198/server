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