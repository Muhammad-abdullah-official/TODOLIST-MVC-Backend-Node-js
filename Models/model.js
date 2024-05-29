const mytodomongoose = require('mongoose');

const myschema = mytodomongoose.Schema;

const todolistschema = new myschema({
  id: Number,
  preference: Number,
  data: String,
});

module.exports = mytodomongoose.model('todolist', todolistschema);
