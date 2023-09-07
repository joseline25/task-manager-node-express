const express = require("express");
// set up the router
const router = express.Router();

// import controllers
// later

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// first route
// since we are going to have the list of all tasks
// and the creation of a new task on the same page

router.route("/").get(getAllTasks).post(createTask);

// get a sinle task, update it or delete it

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

// rappel REST API

//GET   api/tasks   -get all tasks
//POST   api/tasks   -create a task
//GET   api/tasks/:id   -get a task
//PUT/PATCH   api/tasks/:id   -update a task
//DELETE   api/tasks/:id   -delete a task

module.exports = router;
