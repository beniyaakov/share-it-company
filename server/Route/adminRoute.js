const route = require('express').Router();
const adminController = require('../Controller/adminController')

route.get('/getAllAdmin', adminController.getAllAdmin);
route.get('/getAdminById/:id', adminController.getAdminById);
route.put('/updateAdmin/:id', adminController.updateAdmin);
route.delete('/deleteAdmin/:id', adminController.deleteAdmin);

module.exports = route;