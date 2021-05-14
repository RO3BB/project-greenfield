// const { Router } = require('express');
const User = require("../models/usermodels.js");
const bcrypt = require("bcrypt");


const userController = {
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) return res.status(200).json({ msg: "email already exists" });
      if (password.length < 8) return res.status(200).json({ msg: "short password" });
      // Password encryption
      const passwordHash = await bcrypt.hash(password, 10);

      //create new user and save it in database
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwordHash
      });
      await newUser.save();
      return res.status(200).json({newUser});

      /*const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "user/refresh_token",
        //maxAge: 7 * 24 * 60 * 60 * 1000, // seven days
      });
      res.json({ accesstoken });*/

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      //const admin = await User.findOne({ email }) && (user.role===1)
      if (!user) return res.status(200).json({ msg: "User does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      //console.log(isMatch)
      if (!isMatch)
        return res.status(200).json({ msg: "Sorry, Incorrect password" });
      return res.status(200).json({ msg: 'this user logged in'  });

      // if the password match
      /*const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "user/refresh_token",
        //maxAge: 7 * 24 * 60 * 60 * 1000, // seven days
      });
      res.json({ accesstoken });*/

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
}
 /* logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "user/refresh_token" });
      return res.json({ msg: err.message });

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "Please Login/Register" });
      jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please Login/Register" });
        const accesstoken = createAccessToken({ id: user._id })
        res.json({ accesstoken })
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      res.json(req.user)

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }

  }


const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '11m' })
}
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN, { expiresIn: '7d' })
}*/

module.exports = userController;
