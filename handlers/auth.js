// local modules
const db = require('../models')
const passwordHash = require('password-hash')

/* 
* @function = register the user
* @uses = user data
* @created = @02-01-2020 -jash/Ankit
*/
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

/* 
* @function = login the user
* @uses = user data
* @created = @02-01-2020 -jash/Ankit
*/
exports.loginUser = async (req, res, next) => {
    try {
        const {username, password} = req.body

        const user = await db.User.find({
            'cred.username': username
        })
        // console.log(user[0].cred.password)
        if (user.length > 0) {
            // username found
            if (passwordHash.verify(password, user[0].cred.password)) {
                res.json({success: true, msg: "login successful"})
            } else {
                res.json({success: false, msg: "password incorrect"})
            }
        } else {
            res.json({success: false, msg: "Username not found"})
        }
    } catch (error) {
        error.status = 400
        console.log(error)
    }
}