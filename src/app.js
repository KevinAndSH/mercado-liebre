const express = require("express")
const app = express()
const path = require("path")
const rutas = require("./routes/home.routes")
const methodOverride = require("method-override")

//* Defining the port for use in Heroku
let port = process.env.PORT || 3500

//* Defining template engine and views folder
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//* Defining the public folder
app.use(express.static(path.join(__dirname, "../public")))

//* Setting up the environment so it can retrieve data via POST
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//* Setting up the library required to use PUT and DELETE methods
app.use(methodOverride("_method"))

//* Define the routes
app.use("/", rutas)


//! DO NOT ADD CODE AFTER THIS LINE
app.listen(port, () => console.log("Server running in port", port))