const express = require('express');
const mongoose = require('mongoose');
const todolistrouter = require('./Routes/route');
const port = 3001;

const connectionstring = 'mongodb://0.0.0:27017/db';

mongoose
  .connect(connectionstring)
  .then((res) => {
    console.log('Server connected to mongodb');
  })
  .catch((err) => {
    console.log(`Server is not connected to ${err}`);
  });

const app = express();
app.use(express.json());
app.use('/api/todo', todolistrouter);

app.listen(port, () => {
  console.log(`Server is litening on port ${port}`);
});

module.exports = app;
