const Joi = require('joi');
const GraduateModel = require('../Model/graduateModel');

const validateGraduate = (bodyData) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    course: Joi.string().min(3).max(600).required(),
    workAt: Joi.string().min(3).max(600).required(),
    img: Joi.string().min(3).max(1100).required(),
    description: Joi.string().min(3).max(5100).required(),
  });
  return joiSchema.validate(bodyData);
};

const getAllGraduates = async (req, res) => {
  try {
    let graduates = await GraduateModel.find({});
    if (!graduates) {
      return res
        .status(400)
        .json({ message: 'something went wrong getAllGraduates' });
    }
    res.send(graduates);
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};

const postGraduate = async (req, res) => {
  let validBody = validateGraduate(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let graduate = await new GraduateModel(req.body);
    await graduate.save();
    res.send(graduate);
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};

const deleteGraduate = async (req, res) => {
  try {
    let data = await GraduateModel.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};

const editGraduate = (req, res) => {
  let validBody = validateGraduate(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    GraduateModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      (err, result) => {
        if (err) throw err;
        res.status(200).json({ message: 'success', data: result });
      }
    );
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};
module.exports = {
  getAllGraduates,
  postGraduate,
  deleteGraduate,
  editGraduate,
};
