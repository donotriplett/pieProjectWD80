const express = require("express");
const router = express.Router();

router.get("/cherry", (req, res) => res.send("I love cherry pie!"))

router.get("/blueberry", (req, res) => res.send("I love blueberry pie!"));

router.get("/", (req, res) => res.send("I love pie!"));

module.exports = router