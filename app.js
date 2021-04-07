require("dotenv").config();
const Express = require("express");
const app = Express();
const controllers = require("./controllers");
const dbConnection = require("./db");
const middlewares = require("./middleware")
// app.use(Express.static(__dirname + "/public"))
// console.log(__dirname);
// app.get("/", (req, res) => res.render('index'));

app.use(middlewares.CORS)
app.use(Express.json())


app.use("/user", controllers.usercontroller)
app.use("/pies", controllers.piecontroller);


dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));
    })
    .catch((err) => console.log(`[Server]: Server Crashed due to ${err}`));