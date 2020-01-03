exports.testApi = async (req, res, next) => {
    try {
        res.send('done')
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}

exports.nameMessage = async (req, res, next) => {
    try {
        var {name, message} = req.body

        res.send(name + ' : ' + message)
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}