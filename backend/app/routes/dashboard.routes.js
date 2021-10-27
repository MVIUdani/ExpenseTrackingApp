const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
   // port:"3308",
    user: "root",
    password: "",
    database:"expense_tracking"
  });

module.exports = function(app){

    //read total expense
    app.get("/readTotal",(req,res)=>{
    con.query(
    "SELECT SUM(expense) AS Total_Sum FROM expenses",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
    );
    });

    //read current month
    app.get("/readMonth",(req,res)=>{
    con.query(
    "SELECT MONTHNAME(CURDATE()) AS Month",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
    );
    });

     //read income
    app.get("/readIncome",(req,res)=>{
    con.query(
    "SELECT income FROM monthly_income",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
    );
    });

    //read expense for foods
    app.get("/readFoodexpense",(req,res)=>{
    con.query(
    "SELECT SUM(expense) AS Food_Expense FROM expenses WHERE type='Foods'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
    );
    });

    //read expense for movies
    app.get("/readMovieexpense",(req,res)=>{
      con.query(
      "SELECT SUM(expense) AS Movie_Expense FROM expenses WHERE type='Movies'",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
      );
      }); 

      //read expense for online subscriptions
      app.get("/readOnlinesubexpense",(req,res)=>{
        con.query(
        "SELECT SUM(expense) AS Onlinesub_Expense FROM expenses WHERE type='Online Subscriptions'",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
        );
        });

        //read expense for travelling
    app.get("/readTravellingexpense",(req,res)=>{
      con.query(
      "SELECT SUM(expense) AS Travelling_Expense FROM expenses WHERE type='Travelling'",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
      );
      });

      //read expense for others
      app.get("/readOtherexpense",(req,res)=>{
        con.query(
        "SELECT SUM(expense) AS Other_Expense FROM expenses WHERE type='Other'",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
        );
        });

	}