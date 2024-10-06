const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { uploadFile } = require('../middleware/uploadfile');
const User = require('../Models/User.model');

    require('dotenv').config()
router.post('/register', /*uploadFile.single("avatar") ,*/ async (req, res) => {
    try {
        console.log("mmm");
        console.log("req",req);
        let { email, password, firstname, lastname } = req.body
        console.log("body",req.body);
        //const avatar=req.file.filename
        const user = await User.findOne({ email })
        if (user) return res.status(404).send({ success: false, message: "User already exists" })
        const newUser = new User({ email, password, firstname, lastname/*,avatar*/ })
        const createdUser = await newUser.save()
        return res.status(201).send({ success: true, message: "Account  created successfully", user: createdUser })
    }   catch (err) {
        console.log(err)
        res.status(404).send({ success: false, message: err })
    }
});


router.get('/', async (req, res,) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


    
    router.post('/login', async (req, res) => {
        try {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(404).send({ success: false, message: "All fields are required" 
           })
            }
            let user = await User.findOne({ email
            }).select('+password')
            if (!user) {
            return res.status(404).send({ success: false, message: "Account doesn't exists" 
           })
            } else {
            let isCorrectPassword = await bcrypt.compare(password, user.password)
            if (isCorrectPassword) {
            delete user._doc.password
            const token = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
            return res.status(200).send({ success: true,user,token })
            } else {

return res.status(404).send({ success: false, message:
"Please verify your credentials" })
}
}
} catch (err) {
return res.status(404).send({ success: false, message: err.message
})
}
});
//Access Token
const generateAccessToken=(user) =>{
    return jwt.sign ({ iduser: user._id, role: user.role },
    process.env.SECRET, { expiresIn: '60s'})
    }
    // Refresh
    function generateRefreshToken(user) {
    return jwt.sign ({ iduser: user._id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y'})
    }
    
module.exports = router;