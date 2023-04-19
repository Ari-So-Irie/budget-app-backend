const express = require("express");
const budgets = express.Router();
const budgetsArray = require("../models/budget.js");
const { validateURL } = require("../models/validations.js");

// INDEX Get a list of all transactions
budgets.get("/", (req, res) => {
  res.json(budgetsArray)
})

// SHOW Get an individual view(show one transaction)
budgets.get("/:id", (req, res) => {
  if (budgetsArray[req.params.id]) {
    res.json(budgetsArray[req.params.id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE Create a new transaction
budgets.post("/", validateURL, (req, res) => {
  budgetsArray.push(req.body);
  res.json(budgetsArray[budgetsArray.length - 1]);
});


// DELETE Delete a transaction
budgets.delete("/:id", (req, res) => {
    const {id} = req.params;
  const deletedbudget = budgetsArray.splice(`${id}`, 1);
  res.status(200).json(deletedbudget);
});

// UPDATE Update a transaction
budgets.put("/:id", validateURL, async (req, res) => {
  if (budgetsArray[req.params.id]) {
    budgetsArray[req.params.id] = req.body;
    console.log("PUT route successful", req.body )
    res.status(200).json(budgetsArray[req.params.id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = budgets;