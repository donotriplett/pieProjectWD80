const express = require("express");
const router = express.Router();
const {PieModel} = require("../models")

router.get("/cherry", (req, res) => res.send("I love cherry pie!"))

router.get("/blueberry", (req, res) => res.send("I love blueberry pie!"));

router.get("/", async (req, res) => {
    try {
        const allPies = await PieModel.findAll();

        res.status(200).json(allPies);
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
})

module.exports = router