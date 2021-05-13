// const { Router } = require('express');
const User = require("../models/usermodels.js");
const bcrypt = require("bcrypt");

const userController = {
  signup: async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "email already exists" });
        if (password.length < 8)
        return res.status(400).json({ msg: "short password" });
        // Password encryption
        const passwordHash = await bcrypt.hash(password, 10);
        
        //create new user and save it in database
        const newUser = new User({
            name: 'nikki'||req.body.name,
            email: 'lauda'||req.body.email,
            password: 'mierda258'||passwordHash,
        });
        await newUser.save();
        
        const accesstoken = createAccessToken({ id: user._id });
        const refreshtoken = createRefreshToken({ id: user._id });
        
        res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            path: "user/refresh_token",
            maxAge: 7 * 24 * 60 * 60 * 1000, // seven days
        });
        
        return res.status(200).json({ newUser });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Sorry, Incorrect password" });

      // if the password match
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // seven days
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userController;
