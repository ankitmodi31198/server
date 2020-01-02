exports.testApi = async (req, res, next) => {
    try {
        res.send('done')
    } catch (err) {
        err.status = 400
        console.log(err)
    }
}