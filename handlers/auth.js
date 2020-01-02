// local modules
const db = require('../models')

exports.registerUser = async(req, res, next) => {
    try{
        var newUserBody = req.body

        var newUser = {
            
        }

        // await newUser.save()
    
        res.json({newUser, success: true, msg: 'Congratulations! you have registered successfully.'})
    } catch (error) {
        error.status = 400
        console.log(error)
    }
}