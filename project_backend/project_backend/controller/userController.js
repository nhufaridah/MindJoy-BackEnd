const express = require("express")
const router = express.Router()
const userModel = require("../model/userModel")

router.post("/regist", (req,res)=> {
    userModel.register(req,res)
})

router.post("/login", (req,res)=> {
    userModel.userLogin(req,res)
})

router.post("/quiz", (req,res)=> {
    userModel.question(req,res)
})

module.exports = router


