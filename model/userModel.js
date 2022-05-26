const con = require("../config")

exports.register = (req, res) => {
    con.query("insert into account (name,username,password) value (?,?,?)",
        [req.body.name, req.body.username, req.body.password], (err, result) => { 
            if (err) throw err 
            res.status(200).send({message:"Register Successful"}).end()
        })
}

exports.userLogin = (req, res) => {
    con.query("SELECT * FROM account WHERE username=? AND password=?;",
        [req.body.username, req.body.password], (err, result) => { 
            if (err) throw err 
            if (result.length){
                return res.status(200).send({message:"Login Successful"}).end()
            }else {
                return res.status(400).send({message:"Login Failed"}).end()
            }
        })
}