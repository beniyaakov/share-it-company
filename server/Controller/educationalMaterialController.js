const EducationalMaterialModel = require('../Model/educationalMaterialModel');
const {sendMailOfNewPost} = require('../Utils/sendMail');

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
    sendMailOfNewPost();
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
  const { field, newValue } = req.body
  let updatedFiled = {}
  updatedFiled[field] = newValue
  try {
    EducationalMaterialModel.findByIdAndUpdate(req.params.id, { $set: updatedFiled }, { new: true }, (err, result) => {
      if (err) throw err
      res.status(200).json({ message: "success", data: result })
    });
  } catch (error) { }
};
const editMaterialSubjects = async (req, res) => {
  const { newValue, subjectId } = req.body
  let updatedFiled = {}
  updatedFiled[`subjects.$[subject].subjectName`] = newValue
  try {
    EducationalMaterialModel.findByIdAndUpdate(req.params.id, { $set: updatedFiled }, { arrayFilters: [{ "subject._id": { _id: subjectId } }], new: true }, (err, result) => {
      if (err) throw err
      res.status(200).json({ message: "success", data: result })
    });
  } catch (error) { }
};
const editMaterialSubSubjects = async (req, res) => {
  const { newValue, subjectId, field, subSubjectsId } = req.body
  let updatedFiled = {}
  updatedFiled[`subjects.$[subject].subSubjects.$[subSubjects].${field}`] = newValue
  try {
    EducationalMaterialModel.findByIdAndUpdate(req.params.id, { $set: updatedFiled }, { arrayFilters: [{ "subject._id": { _id: subjectId } }, { "subSubjects._id": { _id: subSubjectsId } }], new: true }, (err, result) => {
      if (err) throw err
      res.status(200).json({ message: "success", data: result })
    });
  } catch (error) { }
};

module.exports = {
  getAllMaterials,
  postMaterial,
  deleteMaterial,
  editMaterial,
  editMaterialSubjects,
  editMaterialSubSubjects
};
