const route = require('express').Router();
const {
  deleteCourse,
  editCourse,
  getAllCourses,
  postCourse,
} = require('../Controller/courses');

route.get('/all', getAllCourses);
route.post('/addCourse', postCourse);
route.delete('/deleteCourse/:id', deleteCourse);
route.put('/editCourse/:id', editCourse);

module.exports = route;
