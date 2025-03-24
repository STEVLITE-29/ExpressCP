// initialised express in the server
const express = require('express');
const app = express();

// defined the port number
const port = 4000;
app.listen(port)

// using the static method to serve static files
app.use(express.static("public"))
app.use(express.static("assets"))

//middleware
const workTimeMiddleware = require("./middleware/worktime.js")
app.use(workTimeMiddleware)

//template engine
app.set("view engine", "ejs");
app.set("views", "./views")

// defined the route for the home page
app.get("/", (req, res) => {
    res.render("index")
});

// defined the route for the services page
app.get("/services", (req, res) => {
    res.render("services")
})

// defined the route for the contact page
app.get("/contact", (req, res) => {
    res.render("contact")
});

// 404 page
app.get("*", (req, res) => {
    res.render("notFound")
});


