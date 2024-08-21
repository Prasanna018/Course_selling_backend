const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/Course_Selling");

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number

})

const AdminDb = mongoose.model("Admin", AdminSchema)
const UserDb = mongoose.model("User", UserSchema)
const CourseDb = mongoose.model("Course", CourseSchema)


module.exports = {
    AdminDb,
    UserDb,
    CourseDb
}
