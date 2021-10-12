
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT||5000
const DB = require('./DB/index')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
DB.on('eroor',()=>{
  console.log('connected');
})

const registerRoute = require('./Route/registerRoute')
const userRoute = require('./Route/userRoute')
const postRoute = require('./Route/postRoute')
// app.use('/',(req,res)=>{
// res.send('bomboklat')
// })
app.use('/api/register',registerRoute)
app.use('/api/user',userRoute)
app.use('/api/post',postRoute)

app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);  
})