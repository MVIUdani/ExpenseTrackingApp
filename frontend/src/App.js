import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/home.component";
import AddExpense from "./components/add_expense.component";
import Expense from "./components/expense.component";
import ExpensesList from "./components/expenses_list.component";

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#f1d3f2',minHeight: '100vh'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
           <img src="/logo.png" alt="" width="45" height="45" class="d-inline-block align-text-top"/>
    
            My Expense Manager
          </a>
          <div className="navbar-nav mr-auto">
           <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/expenses"} className="nav-link">
                My Expenses
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Expense
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/expenses" component={ExpensesList} />
            <Route exact path="/add" component={AddExpense} />
            <Route path="/expenses/:id" component={Expense} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
