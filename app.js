const express = require("express");
const app = express();
const cors = require("cors");
// const logger = require("morgan");
const budgetsController = require("./controllers/budgetsControllers.js");
app.use(express.json());
app.use(cors());

// app.use(logger('dev'))
// /budgets is the base url endpoint for the routes
// middleware
app.use("/transactions",budgetsController)
//separation of concerns

// MIDDLEWARE


app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the budgets App");
})

//404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
})

module.exports = app;