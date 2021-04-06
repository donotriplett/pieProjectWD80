const {DataTypes} = require("sequelize");
const db = require("../db");

const Pie = db.define("pie", {
    nameOfPie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    baseOfPie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    crust: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timeToBake: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Pie;