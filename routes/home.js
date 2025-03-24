const express = require("express");
const homeRoute = express.Router()
const path = require("path");

homeRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


module.exports = homeRoute;