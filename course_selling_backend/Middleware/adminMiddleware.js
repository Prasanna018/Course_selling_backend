
const { AdminDb } = require("../Db/serverdb") // defining the db 



async function adminMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password
    const verifyAdmin = await AdminDb.findOne({
        username: username,
        password: password
    })

    if (verifyAdmin) {
        next()
    } else {
        res.status(400).json({
            msg: "admin not found in Db"
        })
    }




}

module.exports = adminMiddleware;