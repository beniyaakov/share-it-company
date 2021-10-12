const route = require('express').Router();

const {
  getAllMaterials,
  postMaterial,
  deleteMaterial,
  editMaterial,
  editMaterialSubjects,
  editMaterialSubSubjects
} = require('../Controller/educationalMaterialController');

route.get('/all', getAllMaterials);
route.post('/addMaterial', postMaterial);
route.delete('/deleteMaterial/:id', deleteMaterial);
route.put('/editMaterial/:id', editMaterial);
route.put('/editMaterialSubjects/:id', editMaterialSubjects);
route.put('/editMaterialSubSubjects/:id', editMaterialSubSubjects);

module.exports = route;
