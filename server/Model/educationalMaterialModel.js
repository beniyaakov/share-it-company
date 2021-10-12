const { string } = require('joi');
const mongoose = require('mongoose');

const EducationalMaterialSchema = new mongoose.Schema({
  title: String,
  description: String,
  subjects: {
    type: [
      {
        subjectName: String,
        subSubjects: {
          type: [{ title: String, description: String, linkSource: String }],
        },
      },
    ],
  },
});

const EducationalMaterialModel = mongoose.model(
  'educationalMaterials',
  EducationalMaterialSchema
);
module.exports = EducationalMaterialModel;

//   default: new mongoose.Schema({
//       title: String,
//       description: String,
//       linkSource: String,
//     }),]
