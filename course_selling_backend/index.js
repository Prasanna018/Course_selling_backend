const express = require("express");

const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(express.json());

const AdminRoute = require("./Routes/Admin");
const UserRoute = require("./Routes/User");

app.use("/admin", AdminRoute);
app.use("/user", UserRoute)



app.listen(3000, () => {
    console.log("server is running on port 3000")
});

