const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const userRoute = require('./routes/user.route.js');ym

const userRouter = require('../Food App/routes/user.route.js')(app);

// Middleware
app.use('/api/users', userRouter); //making the routes accesssible under api/users
app.use(express.urlencoded({ extended: false }));

app.listen(8000, () => {
  console.log('Server is runnig on port 8000');
});

app.get('/', (req, res) => {
  res.send('Hello from Node APIII');
});

mongoose
  .connect(
    'mongodb+srv://admin:o3VPUvuJIa17ETFJ@foodapp-cluster.f0wthyw.mongodb.net/food-app?retryWrites=true&w=majority&appName=foodapp-cluster'
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(() => {
    console.log('Connection failed');
  });
