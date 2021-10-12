const EducationalMaterialModel = require('../Model/educationalMaterialModel');

const getAllMaterials = async (req, res) => {
  try {
    let materials = await EducationalMaterialModel.find({});
    res.send(materials);
  } catch (error) {
    console.log(error);
    res.send('something wend wrong');
  }
};

const postMaterial = async (req, res) => {
  try {
    let material = new EducationalMaterialModel(req.body);
    await material.save();
    res.send(material);
  } catch (error) {
    console.log(error);
    res.send('you missing something in the body');
  }
};

const deleteMaterial = async (req, res) => {
  try {
    let data = EducationalMaterialModel.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send('not found id in database');
  }
};

const editMaterial = async (req, res) => {
  // isac will be continue
  //   try {
  //     let data = EducationalMaterialModel.updateOne(
  //       { _id: req.params.id },
  //       req.body
  //     );
  //   } catch (error) {}
};

module.exports = {
  getAllMaterials,
  postMaterial,
  deleteMaterial,
  editMaterial,
};
