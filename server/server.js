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

const registerRoute = require('./Route/registerRoute');
const userRoute = require('./Route/userRoute');
const postRoute = require('./Route/postRoute');
const adminRoute = require('./Route/adminRoute');
const loginRoute = require('./Route/loginRoute');
const educationalMaterialRoute = require('./Route/educationalMaterialRoute');
const CoursesRoute = require('./Route/coursesRoute');

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/register', registerRoute);
app.use('/api/userAuth', loginRoute);
app.use('/api/educationalMaterialRoute', educationalMaterialRoute);
app.use('/api/admin', adminRoute);
app.use('/api/Courses', CoursesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
