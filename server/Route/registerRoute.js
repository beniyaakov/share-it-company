const route = require('express').Router()
const {registerUser,registerAdmin} = require('../Controller/registerController')

route.post('/registerUser',registerUser)
route.post('/registerAdmin',registerAdmin)

module.exports = route