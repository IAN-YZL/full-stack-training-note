function addStudent(req, res) {}
function getStudent(req, res) {}
function getAllStudent(req, res) {
  res.json([]);
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
