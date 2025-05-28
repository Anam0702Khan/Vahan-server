const UserModel = require('../model/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const user = {
  email: "test@example.com",
  password: bcryptjs.hashSync("password123", 10), 
};

const SECRET = process.env.JWT_SECRET || "secret123";

const loginUser = async(req,res) => {
    const {email,password} = req.body
    if(email !== user.email || !bcryptjs.compareSync(password,user.password)){
       return res.status(401).json({message: "Invalid Credentials"})
    }

    const token = jwt.sign({email},SECRET,{expiresIn: "1h"})
     res.json({token})
}

module.exports = loginUser