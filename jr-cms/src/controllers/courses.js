const Course = require('../models/course');

async function addCourse(req, res) {
  const { name, code, description } = req.body;
  // validate user input, params
  const course = new Course({ code, name, description });
  await course.save();
  return res.status(201).json(course);
}

async function getCourse(req, res) {
  const { id: code } = req.params;
  const course = await Course.findById(code);
  if (!course) {
    return res.status(404).json('course not found');
  }
  return res.json(course);
}
async function getAllCourses(req, res) {
  // Course.find((err, result) => {
  //   if (err) res.status(400).json(err);
  //   res.json(result);
  // });
  const courses = await Course.find().exec();
  return res.json(courses);
  // {status: 'ok', data: courses, error: error}
}
// 200, 201, 204, 400, 401, 403, 404
// 400 -> user params invalid
// 401 -> unauthorized
// 403 -> no permission
async function updateCourse(req, res) {
  const { id: code } = req.params;
  // await Course.findByIdAndUpdate(code, req.body, {new:true})
  const { name, description } = req.body;
  // validate params
  const course = await Course.findByIdAndUpdate(
    code,
    { name, description },
    { new: true }
  );

  //
  // const course = await Course.findById(code);
  if (!course) {
    return res.status(404).json('course not found');
  }
  // course.name = name;
  // course.description = description;
  await course.save();

  return res.json(course);
}
async function deleteCourse(req, res) {
  const { id: code } = req.params;
  const course = await Course.findByIdAndDelete(code);

  if (!course) {
    return res.status(404).json('course not found');
  }
  return res.sendStatus(204);
  // return res.status(204).json(course);
}

module.exports = {
  addCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
};
