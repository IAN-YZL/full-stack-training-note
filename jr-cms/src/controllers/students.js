const Student = require('../models/student');

async function addStudent(req, res) {
  const { studentID, firstName, lastName, email} = req.body;
  const student = new Student({studentID, firstName, lastName, email});
  await student.save();
  return res.status(201).json(student);
}

async function getStudent(req, res) {
  const { id: studentID } = req.params;
  const student = await Student.findById(studentID);
  if (!student) {
    return res.status(404).json("Student cannot find");
  }
  return res.json(student);
}

async function getAllStudent(req, res) {
  const students = await Student.find().exec();
  return res.json(students);
}

async function updateStudent(req, res) {
  const {id: studentID} = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await Student.findByIdAndUpdate(
    studentID,
    { firstName, lastName, email },
    {new: true}
  );

  if (!student) {
    return res.status(404).json('The student does not exist!');
  }
  await student.save();
  return res.json(student);
}

async function deleteStudent(req, res) {
  const { id: studentID } = req.params;
  const student = await Student.findByIdAndDelete(studentID);

  if (!student) {
    return res.status(404).json("The student does not exist!");  
  }
  return res.status(204).json(student);
}

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
