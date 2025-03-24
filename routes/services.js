const express = require("express");
const servicesRoute = express.Router()
const path = require('path')

servicesRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/services.html"))
})

module.exports = servicesRoute;