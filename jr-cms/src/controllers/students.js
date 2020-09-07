const Student = require('../models/student');

async function addStudent(req, res) {
  const { studentID, firstName, lastName, email} = req.body;
  const student = new Student({studentID, firstName, lastName, email});
  await student.save();
  return res.status(201).json(student);
}

function getStudent(req, res) {
}

async function getAllStudent(req, res) {
  const students = await Student.find().exec();
  return res.json(students);
}

function updateStudent(req, res) {}
function deleteStudent(req, res) {}

module.exports = {
  addStudent,
  getStudent,
  getAllStudent,
  updateStudent,
  deleteStudent
};

// // singleton pattern
// class StudentCtrl {
//   getStudent() {}
// }

// module.exports = new StudentCtrl();
