// 等同于src/routes/index.js

// import folder, -> folder/index.js
const express = require('express');
const postsRoute = require('./routes/posts');
const router = express.Router();

router.use('/posts', postsRoute);

module.exports = router;
