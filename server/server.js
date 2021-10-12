
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT||5000
const DB = require('./DB/index')

const adminRoute = require('./Route/adminRoute');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
DB.on('eroor',()=>{
  console.log('connected');
})

// app.use('/',(req,res)=>{
//   res.send('bomboklat')
// })

app.use("/api/admin", adminRoute);

app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);  
})