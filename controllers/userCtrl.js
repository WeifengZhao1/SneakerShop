const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    register: async (req,res) => {
       try {
        const {name,email,password} = req.body;
        const user = await Users.findOne({email})

        if (user) return res.status(400).json({msg: "The email already exists"})
        if (password.length < 6) 
            return res.status(400).json({msg:"Password is too short"})
        
        // Password Encryption
        const passwordHash = await bcrypt.hash(password, 10)
        //res.json({password, passwordHash})

        const newUser = new Users({
            name, email, password: passwordHash
        })
        // Save in mongodb
        await newUser.save()

        // Then create jsonwebtoken for authenticaiton
        const accesstoken = createAccessToken({id: newUser._id})
        const refreshtoken = createRefreshToken({id: newUser._id})

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            path: '/user/refresh_token'
        })

        res.json({accesstoken})

       } catch(err){
           return res.status(500).json({msg: err.message})
       }
    },
    refreshToken: (req, res) =>{
        try{
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(400).json({msg: "Please login or register"})

            jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=> {
                if (err) return res.status(400).json({msg: "plese login or register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })
             // res.json({rf_token})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }


    }
}

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl