
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT||5000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/',(req,res)=>{
res.send('bomboklat')
})


app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);  
})