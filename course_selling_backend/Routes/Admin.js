const { Router } = require("express")
const router = Router();
const { AdminDb, CourseDb } = require("../Db/serverdb")
const adminMiddleware = require("../Middleware/adminMiddleware")

router.post("/signup", function (req, res) {
    // creating a new admin account and store in admin db
    const username = req.body.username;
    const password = req.body.password;
    AdminDb.create({
        username: username,
        password: password
    })

    res.json({
        msg: "admin created successfully"
    })

})

router.post("/courses", adminMiddleware, async function (req, res) {
    // input headers should be username.passowrd 

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const newCourse = await CourseDb.create({
        title: title,
        description: description,
        price: price

    })

    res.json({
        msg: "course created successfully",
        courseId: newCourse._id
    })

})

router.get("/courses", adminMiddleware, async function (req, res) {

    const response = await CourseDb.find({})

    res.json({
        msg: "Your courses",
        courses: response
    })



})




module.exports = router;
