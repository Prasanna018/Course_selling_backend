const { UserDb } = require("../Db/serverdb")



async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const verifyUser = await UserDb.findOne({
        username: username,
        password: password
    })

    if (verifyUser) {
        next()
    } else {
        res.status(400).json({
            msg: "User not found in Db"
        })
    }

}


module.exports = userMiddleware;