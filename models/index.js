const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = global.Promise
mongoose.connect('mongodb://heroku_0bvnv42t:7g9dum85vb2ofac0n4hep6b3d9@ds259528.mlab.com:59528/heroku_0bvnv42t')

module.exports.Ingredient = require('./ingredient')
module.exports.Food = require('./food')
module.exports.Cusine = require('./cusine')
module.exports.User = require('./user')