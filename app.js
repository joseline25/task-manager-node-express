// to set up node.js, npm install
// then npm init
// for express: npm install express
// Use npm to install the express and twilio packages: npm install express twilio
// for mongoose (mongo db): npm install mongoose
// for .env: npm install dotenv
// install nodemon as a dev dependency: npm install --save-dev nodemon

// explorez aussi le fichier gitignore qui specifie tout ce qui
//ce sera ignoré lors du déploiement

// set up the database connection
//require('./db/connect')

// set up a basic express server

const express = require("express");
const app = express();

// get the routes
const tasks = require("./routes/tasks");

// connection to DB final part 1
const connectDB = require("./db/connect");
require('dotenv').config();

// middleware
app.use("/api/v1/tasks", tasks);

// routes

// a route is a request(get, post, put, ...) with the url and a callback function
const port = 3000;

// connection to DB part 2

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Je suis Josie et mon serveur écoute au port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// examples of routes with get

app.get("/hello", (req, res) => {
  res.send("Hello! Je suis Joseline");
});

app.get("/", (req, res) => {
  res.send("Welcome to my Task Manager App");
});

// list of all the tasks (get)
// app.get('/api/v1/tasks')

// get the details/infos of a specific task (get)
// app.get('/api/v1/tasks/:id')

// create a new task (post)
// app.post('/api/v1/tasks')

// update a task (put, patch)
// app.patch('/api/v1/tasks/:id')

// delete a task
// app.delete('/api/v1/tasks/:id')
