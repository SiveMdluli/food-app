module.exports = function (app) {
  // Receive the app instance
  const express = require('express');
  const userController = require('../controllers/user.controller.js');

  const router = express.Router();

  app.use('/api/users', router); // Mount the router with the received app instance

  // Get user by ID
  // router.get('/:id', getUser);

  // Registration Route
  router.post('/register', async (req, res) => {
    try {
      await userController.registerUser(req, res);
      res.status(201).json({ message: 'User created successfully' }); // Add success message
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
    }
  });

  // Login Route
  router.post('/login', async (req, res) => {
    try {
      await userController.loginUser(req, res);
      // Add appropriate response for successful login (e.g., send a JWT)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });

  // Get all users
  router.get('/all', userController.getAllUsers);

  // Get User Route (Optional)
  router.get('/user/:id', async (req, res) => {
    try {
      await userController.getUser(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  });

  return router; // Optional: Return the router for potential chaining
};
