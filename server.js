const express = require('express')
const mongoose = require('mongoose')
const router = require('./controllers/userController')
require('dotenv').config()
const app = express()
const port = 3500
const cors = require('cors')

app.use(express.json())
// app.use(cookieParser())
app.use(cors())

// app.get('/register', (req, res) => {
//       res.send('merde it worked')
//     });

app.post('/register', router)

// app.post('/', function (req, res) {
//   console.log("POST Request Received");
//   res.send('<h2 style="font-family: Malgun Gothic; color: green; ">A course new Course is Added!</h2>');
// })



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
