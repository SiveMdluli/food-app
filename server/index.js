const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user.route.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

app.listen(8000, () => {
  console.log('Server is runnig on port 8000');
});

app.get('/', (req, res) => {
  res.send('Hello from Node APIII');
});

mongoose
  .connect(
    'mongodb+srv://sive:RIhnU3Qv1aTHjhuS@food-app.jyycekq.mongodb.net/?retryWrites=true&w=majority&appName=food-app'
  )
  .then(() => {
    console.log('Connected to the database !');
  })
  .catch(() => {
    console.log('Connection failed');
  });
