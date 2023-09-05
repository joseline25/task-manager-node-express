// to set up node.js, npm install
// then npm init
// for express: npm install express
// Use npm to install the express and twilio packages: npm install express twilio
// for mongoose (mongo db): npm install mongoose
// for .env: npm install dotenv
// install nodemon as a dev dependency: npm install --save-dev nodemon

// explorez aussi le fichier gitignore qui specifie tout ce qui
//ce sera ignoré lors du déploiement

console.log("Task Manager App");
console.log("je suis Josi");

// set up a basic express server

const express = require("express");
const app = express();

// routes
// a route is a request(get, post, put, ...) with the url and a callback function
const port = 3000;

app.listen(
  port,
  console.log(`Je suis Josie et mon serveur écoute au port ${port}`)
);

// get

app.get("/hello", (req, res) => {
  res.send("Hello! Je suis Joseline");
})

app.get("/", (req, res) => {
    res.send("Welcome to my Task Manager App");
})

// list of all the tasks (get)

// get the details/infos of a specific task (get)

// create a new task (post)

// update a task (put)

// delete a task


