const express = require('express');
const { handleCreatePost } = require('../../controllers/blogPostController');
const router = express.Router();
router.post('/', handleCreatePost);
module.exports = router;
