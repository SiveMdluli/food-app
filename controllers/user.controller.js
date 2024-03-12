const User = require('../models/user.model.js');

// Registration
const registerUser = async (req, res) => {
  try {
    const { userID, username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Email or username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password before saving

    const user = new User({
      userID,
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Log In User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

// Get User
const getUser = async (req, res) => {
  try {
    const userID = req.params.id;

    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user' });
  }
};

// get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}); // Find all users without any filters
  
      // Optional: Filter users based on specific criteria (e.g., role, registration date)
      // const users = await User.find({ role: 'admin' }); // Filter by role
  
      res.status(200).json(users); // Send all retrieved users in the response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  };
  

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAllUsers
};
