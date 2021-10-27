module.exports = app => {
  const expenses = require("../controllers/expense.controller.js");

  var router = require("express").Router();

  // Create a new Expense
  router.post("/", expenses.create);

  // Retrieve all expenses
  router.get("/", expenses.findAll);

  // Retrieve all published expenses
  router.get("/published", expenses.findAllPublished);

  // Retrieve a single Expense with id
  router.get("/:id", expenses.findOne);

  // Update a Expense with id
  router.put("/:id", expenses.update);

  // Delete a Expense with id
  router.delete("/:id", expenses.delete);

  // Delete all expenses
  router.delete("/", expenses.deleteAll);

  app.use('/api/expenses', router);
};