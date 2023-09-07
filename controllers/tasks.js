// call our model
const Task = require("../models/tasks");

// here we will have all the logic (functions)
// in callbacks functions

const getAllTasks = (req, res) => {
  res.send("All the tasks");
};

const createTask = async (req, res) => {
  // creation d'une task à partir du modèle Task
  const task = await Task.create(req.body);
  res.status(201).json({ task });

  //res.send("create a task");
};

const getTask = (req, res) => {
  //res.send("get a single task");
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update a task");
};

const deleteTask = (req, res) => {
  res.send("delete a task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };

// ES module
// exports.default{getAllTasks}
