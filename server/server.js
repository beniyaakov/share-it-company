const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const DB = require('./DB/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
DB.on('eroor', () => {
  console.log('connected');
});

<<<<<<< HEAD
const registerRoute = require('./Route/registerRoute')
const userRoute = require('./Route/userRoute')
const postRoute = require('./Route/postRoute')
// app.use('/',(req,res)=>{
// res.send('bomboklat')
// })
app.use('/api/register',registerRoute)
app.use('/api/user',userRoute)
app.use('/api/post',postRoute)
=======
const adminRoute = require('./Route/adminRoute');
const registerRoute = require('./Route/registerRoute');
const loginRoute = require('./Route/loginRoute');
const educationalMaterialRoute = require('./Route/educationalMaterialRoute');

app.use('/api/register', registerRoute);
app.use('/api/userAuth', loginRoute);
app.use('/api/educationalMaterialRoute', educationalMaterialRoute);
app.use("/api/admin", adminRoute);
>>>>>>> 82fe688de3febbe2eefb697b02c640bc85e4a867

// app.use('/',(req,res)=>{
  // res.send('bomboklat')
  // })
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
