const express = require("express")
const app = express()

const path = require("path")

const rutas = require("./routes/home.routes")

let port = process.env.PORT || 3500

app.use(express.static(path.join(__dirname, "./public")))
app.use("/", rutas)



app.listen(port, () => console.log("Server running in port", port))