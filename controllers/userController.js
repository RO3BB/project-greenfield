// const { Router } = require('express');
const express = require('express');
const User = require('../models/usermodels.js');
const bcrypt = require('bcrypt');
var router = express.Router()
// const { getMaxListeners } = require('../models/usermodels.js');

// router.post('/register', function (req, res) {
//   console.log("POST Request Received");
//   res.send('<h2 style="font-family: Malgun Gothic; color: green; ">A course new Course is Added!</h2>');
// })
// signup controller
// const control ={
// render:  async (req, res) => {
router.post('/register', async  (req, res) => {
    try {
    //     // // const { name, email, password } = req.body;
    //     // const user = await User.findOne({ email });
    //     // if (user) return res.status(400).json({ msg: 'email already exists' });
    //     // if (password.length < 8) return res.status(400).json({ msg: 'short password' });

        //create new user and save it in database
        const newUser = new User({
            name: req.body.name,
            email: req.body.email, 
            password: req.body.password
        })
        await newUser.save()
        return res.status(200).json({newUser})
    }
    catch(err) {
        return res.status(500).json({ msg: err.message })
    }
})


module.exports = router