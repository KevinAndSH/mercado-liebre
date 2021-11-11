const express = require("express")
const app = express()
const path = require("path")

const basedOn = require("../model/based-on.json")
const onSale = require("../model/on-sale.json")


const controller = {
  home: (req, res) => {
    res.render("home", {basedOn, onSale})
  },

  register: (req, res) => {
    res.render("register")
  },

  login: (req, res) => {
    res.render("login")
  }
}


module.exports = controller