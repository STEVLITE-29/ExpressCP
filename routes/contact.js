const express = require("express");
const contactRoute = express.Router()
const path = require("path");

contactRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/contact.html"));
});


module.exports = contactRoute;