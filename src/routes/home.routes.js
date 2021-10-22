const express = require("express")
const router = express.Router()

const path = require("path")

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"))
})

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"))
})

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"))
})


router.post("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"))
})

router.post("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"))
})

router.post("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"))
})

module.exports = router