require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

const PORT = process.env.PORT || 5001
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})

// Connect to mongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

app.get('/',(req,res) => {
    res.json({msg: "Welcome to my website"})
})

// Routes
// http://localhost:5001/user/register
app.use('/user', require('./routes/userRouter'))

