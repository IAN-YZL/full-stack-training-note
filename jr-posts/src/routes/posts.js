const express = require('express');
const {
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  addPost
} = require('../controllers/posts');
const router = express.Router();

// localhost:3000/posts
router.get('', getAllPost);
router.post('', addPost);
router.get('/:id', getPostById);
router.put('/:id', updatePostById);
router.delete('/:id', deletePostById);

module.exports = router;
