const express = require('express');
const UserController = require('../controllers/UserController');
const User = require('../models/user');

const router = express.Router();

const userController = new UserController();

router.patch('/:id', userController.updateUserProfile);
router.get('/:id', userController.getUserInfo);
router.get('/:user_id/posts', userController.getUserPost);

module.exports = router;

// "/:id/posts"
// "/:id/profile"
