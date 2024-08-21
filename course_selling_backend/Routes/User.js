const { Router } = require("express");
const { UserDb, CourseDb } = require("../Db/serverdb");
const router = Router();
const userMiddleware = require("../Middleware/userMiddleware")


router.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    UserDb.create({
        username: username,
        password: password
    })

    res.json({
        msg: "user created successfully"
    })

})

router.get('/courses', userMiddleware, async function (req, res) {
    // headers should conatain the username and password
    const response = await CourseDb.find({});
    res.json({
        response
    })

})

router.post('/courses/:id', userMiddleware, async function (req, res) {
    const id = req.params.id;
    const purchase = await CourseDb.findOne({
        id: id
    })

    res.json({
        msg: "course purchased successfully",
        course: purchase
    })


})







module.exports = router;
