const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = 3500
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const router = require('./routes/userRoute.js')

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use('/user', router)





const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err =>{
  if(err) throw err;
  console.log('Connected to MongoDB')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
