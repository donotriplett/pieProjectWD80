require("dotenv").config();
const Express = require("express");
const app = Express();
// app.use(Express.static(__dirname + "/public"))
// console.log(__dirname);

// app.get("/", (req, res) => res.render('index'));

const controllers = require("./controllers");

app.use("/pies", controllers.piecontroller);

app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));