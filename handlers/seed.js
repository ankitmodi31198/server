const db = require('../models')
const cusineSeeds = require('../seeds/cusines')
const ingredientSeeds = require('../seeds/ingredients')

exports.seedCusine = async (req, res, next) => {
    try {
        // console.log(cusineSeeds.length)
 
        for (let i = 0; i < cusineSeeds.length; i++) {
            const e = cusineSeeds[i];
            var newCusine = new db.Cusine(e)
        
            await newCusine.save((err, done) => {
                if (err) {
                    throw err
                }
            })
        }
        res.send('done')
    } catch (error) {
        error.status = 400
        console.log(error)
    }
}

exports.seedIngredient = async (req, res, next) => {
    try {
        for (let i = 0; i < ingredientSeeds.length; i++) {
            const e = ingredientSeeds[i];
            var newIngredient = new db.Ingredient(e)

            await newIngredient.save((err, done) => {
                if (err) {
                    throw err
                }
            })
        }
        res.send('done')
    } catch (error) {
        error.status = 400
        console.log(error)
    }
}