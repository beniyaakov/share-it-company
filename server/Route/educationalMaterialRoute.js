const route = require('express').Router();

const {
  getAllMaterials,
  postMaterial,
} = require('../Controller/educationalMaterialController');

route.get('/all', getAllMaterials);
route.post('/addMaterial', postMaterial);
route.delete('/deleteMaterial/:id', postMaterial);

module.exports = route;
