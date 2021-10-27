module.exports = (sequelize, Sequelize) => {
  const Expense = sequelize.define("expense", {
    description: {
      type: Sequelize.TEXT
    },
    expense: {
      type: Sequelize.FLOAT
    },
    type: {
      type: Sequelize.STRING
    }
  });

  return Expense;
};