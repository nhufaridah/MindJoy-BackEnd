const con = require("../config")

exports.register = (req, res) => {
    con.query("insert into account (name,username,password) value (?,?,?)",
        [
            req.body.name, 
            req.body.username, 
            req.body.password
        ], 
            (err, result) => { 
            if (err) throw err 
            res.status(200).send({message:"Register Successful"}).end()
            })
}

exports.question = (req, res) => {
    if(req.body.gender !== "" && req.body.age !== "" && req.body.feeling !== "" && req.body.sadness !== "" && req.body.low_time !== "" && req.body.activities !== "" && req.body.capabilities !== "" && req.body.supported !== "" && req.body.frequently !== "" && req.body.kondisi !== "" && req.body.abuse !== "" && req.body.time_spend !== "" && req.body.appointment !== "" && req.body.self_feel !== "" && req.body.comfortable !== ""){
        con.query("insert into quiz(`gender`,`age`,`feeling`,`sadness`,`low_time`,`activities`,`capabilities`,`supported`,`frequently`,`kondisi`,`abuse`,`time_spend`,`appointment`,`self_feel`,`comfortable`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
            req.body.gender,
            req.body.age,
            req.body.feeling,
            req.body.sadness,
            req.body.low_time,
            req.body.activities,
            req.body.capabilities,
            req.body.supported,
            req.body.frequently,
            req.body.kondisi,
            req.body.abuse,
            req.body.time_spend,
            req.body.appointment,
            req.body.self_feel,
            req.body.comfortable
        ],
        (err, result) => {
            if (err) throw err
            return res.status(201).send({message:"Successfully Input"})
        }) 
    }else{
        return res.status(400).send({message:"Please Fill Out All Fields"})
    }   
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