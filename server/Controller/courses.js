const CoursesModel = require('../Model/courses');
const Joi = require('joi');

const validateCourse = (bodyData) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    url: Joi.string().min(3).max(600).required(),
    description: Joi.string().min(3).max(5100).required(),
    from: Joi.string().min(3).max(100).required(),
  });
  return joiSchema.validate(bodyData);
};

const getAllCourses = async (req, res) => {
  try {
    let courses = await CoursesModel.find({});
    if (!courses) {
      return res
        .status(400)
        .json({ message: 'something went wrong getAllCourses' });
    }
    res.send(courses);
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};

const postCourse = async (req, res) => {
  let validBody = validateCourse(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let course = await new CoursesModel(req.body);
    await course.save();
    res.send(course);
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    let data = await CoursesModel.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: 'failed', error: error.message });
  }
};

const editCourse = (req, res) => {
  let validBody = validateCourse(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    CoursesModel.findByIdAndUpdate(
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
  getAllCourses,
  postCourse,
  deleteCourse,
  editCourse,
};
