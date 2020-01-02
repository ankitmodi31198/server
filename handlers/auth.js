// local modules
const db = require('../models')
const passwordHash = require('password-hash')

exports.registerUser = async (req, res, next) => {
    try {
        var newUserBody = req.body

        var newUser = {
            cred: {
                username: newUserBody.username,
                password: passwordHash.generate(newUserBody.password)
            },
            details: {
                name: newUserBody.name,
                contact: {
                    mobile1: newUserBody.mobile1,
                    mobile2: newUserBody.mobile2,
                    email: newUserBody.email
                },
                dob: newUserBody.dob,
                address: {
                    street: newUserBody.street,
                    area: newUserBody.area,
                    pincode: newUserBody.pincode,
                    city: newUserBody.city,
                    state: newUserBody.state,
                    country: newUserBody.country
                }
            },
            urls: {
                website: newUserBody.website,
                youtube: newUserBody.youtube
            }
        }

        var user = new db.User(newUser)

        await user.save()

        res.json({newUser, success: true, msg: 'Congratulations! you have registered successfully.'})
    } catch (error) {
        error.status = 400
        console.log(error)
    }
}