const mongoose = require('mongoose')
require('dotenv').config()
const dbConnection = process.env.dbConnection
mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("db connected")
}).catch(() => {
    console.log("faild to connect to db");
})

const db = mongoose.connection
module.exports = db