const todolisttask = require('../Models/model');

exports.getAlltasks = async (req, res) => {
  return await todolisttask.find();
};

exports.createtodotask = async (todolisttasks) => {
  return await todolisttask.create(todolisttasks);
};

exports.gettodolist = async (id) => {
  return await todolisttask.findById(id);
};

exports.updatetodolist = async (id, todotask) => {
  return await todolisttask.findByIdAndUpdate(id, todotask);
};

exports.deletetodolist = async (id) => {
  return await todolisttask.findByIdAndDelete(id);
};
