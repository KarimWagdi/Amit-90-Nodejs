const express = require('express');
const app = express();
const connectDB = require('./src/db/mongoodb.js');
const User = require('./src/models/User');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});


app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// app.post('/user', (req, res) => {
//   const userData = req.body;
//   console.log(userData);
//   const data = { message: "User created successfully!", user: userData };
//   res.json(data);
// });

//full obj
app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const data = { message: `User ID ${userId} updated successfully!`, user: userData };
  res.json(data);
});


//partial obj
app.patch('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const data = { message: `User ID ${userId} partially updated successfully!`, user: userData };
  res.json(data);
});

app.delete('/user/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  const data = { message: `User ID ${req.params.id} deleted successfully!` };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});