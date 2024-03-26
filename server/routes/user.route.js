const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Registration route
router.post('/register', userController.register);

// Login route
router.post('/login', userController.login);

// Get One User
router.get('/:id', userController.getOneUser);

// Get All Users
router.get('/', userController.getAllUsers);

// Update User
router.put('/:id', userController.updateUser);

// Delete User
router.delete('/:id', userController.deleteUser);

module.exports = router;
