const express = require("express")
const app = express()

const path = require("path")

let port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"))
})


app.post("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.post("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.post("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.listen(port, () => console.log("Server running in port", port))