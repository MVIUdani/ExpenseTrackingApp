module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: null,
  //PORT: "3308",
  DB: "expense_tracking",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};