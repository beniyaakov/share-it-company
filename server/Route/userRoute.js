const rout = require('express').Router()
const {UpdateUser,deleteUser,getAllUsers,getUserById, userFavorites } = require("../Controller/userController")
rout.put('/updateUser',UpdateUser)
rout.delete('/deleteUser',deleteUser)
rout.get('/getAllUsers',getAllUsers)
rout.get('/getUserById/:id',getUserById)
rout.put('/userFavorites/:id',userFavorites)

module.exports = rout