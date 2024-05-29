const todolisttaskservice = require('../Services/service');

exports.gettodolist = async (req, res) => {
  try {
    const list = await todolisttaskservice.getAlltasks();
    res.status(200).json({
      data: list,
      message: 'Todo List!',
    });
  } catch (error) {
    res.status(500).json({
      message: `Error ${error}`,
    });
  }
};

exports.addtasktotodolist = async (req, res) => {
  try {
    const list = await todolisttaskservice.createtodotask(req.body);
    res.status(200).json({
      data: list,
      message: 'Task added to todo list sucessfully!',
    });
  } catch (error) {
    res.status(500).json({
      message: `Error ${error}`,
    });
  }
};

exports.gettodolistById = async (req, res) => {
  try {
    const list = await todolisttaskservice.gettodolist(req.params.id);
    res.status(200).json({
      data: list,
      message: 'Task created sucessfully!',
    });
  } catch (error) {
    res.status(500).json({
      message: `Error ${error}`,
    });
  }
};

//controller js code
exports.updatetodolist = async (req, res) => {
  try {
    const list = await todolisttaskservice.updatetodolist(
      req.params.id,
      req.body
    );
    res.status(200).json({
      data: list,
      message: 'Task updated sucessfully!',
    });
  } catch (error) {
    res.status(500).json({
      message: `Error ${error}`,
    });
  }
};

exports.deletetodolist = async (req, res) => {
  try {
    const list = await todolisttaskservice.deletetodolist(req.params.id);
    res.status(200).json({
      data: list,
      message: 'Task deleted sucessfully!',
    });
  } catch (error) {
    res.status(500).json({
      message: `Error ${error}`,
    });
  }
};
