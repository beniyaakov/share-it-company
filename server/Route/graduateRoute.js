const route = require('express').Router();
const {
  getAllGraduates,
  postGraduate,
  deleteGraduate,
  editGraduate,
} = require('../Controller/graduateController');

route.get('/all', getAllGraduates);
route.post('/addGraduate', postGraduate);
route.delete('/deleteGraduate/:id', deleteGraduate);
route.put('/editGraduate/:id', editGraduate);

module.exports = route;
