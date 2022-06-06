const express = require("express")
const router = require("./controller/userController")
const { route } = require("./controller/userController")
const server = express()
const port = 9001
// const db = require("./config")

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use('/' , router)
server.listen(port, ()=> console.log(`Server running at port ${port}`))
