const express = require('express');
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const data = "Hello World!";
  res.send(data);
});

app.get('/users', (req, res) => {
  const data = { message: "Hello from API!" };
  res.json(data);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const obj = {name:req.query.name, age: req.query.age}
  console.log(obj);
  const data = { message: `Hello from API! User ID: ${userId}` };
  res.json(data);
});











app.post('/user', (req, res) => {
  const userData = req.body;
  const data = { message: "User created successfully!", user: userData };
  res.json(data);
});

app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const data = { message: `User ID ${userId} updated successfully!`, user: userData };
  res.json(data);
});

app.patch('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const data = { message: `User ID ${userId} partially updated successfully!`, user: userData };
  res.json(data);
});

app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  const data = { message: `User ID ${userId} deleted successfully!` };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});