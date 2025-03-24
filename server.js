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

// defined the route for the home page
const homeRouter = require("./routes/home.js")
app.use("/", homeRouter)

// defined the route for the services page
const servicesRouter = require("./routes/services.js")
app.use("/services", servicesRouter)

// defined the route for the contact page
const contactRouter = require("./routes/contact.js")
app.use("/contact", contactRouter)


