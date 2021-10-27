import React, { Component } from "react";
import ExpenseDataService from "../services/expense.service";
import { Link } from "react-router-dom";

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchType = this.onChangeSearchType.bind(this);
    this.retrieveExpenses = this.retrieveExpenses.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveExpense = this.setActiveExpense.bind(this);
    this.removeAllExpenses = this.removeAllExpenses.bind(this);
    this.searchType = this.searchType.bind(this);

    this.state = {
      expenses: [],
      currentExpense: null,
      currentIndex: -1,
      searchType: ""
    };
  }

  componentDidMount() {
    this.retrieveExpenses();
  }

  onChangeSearchType(e) {
    const searchType = e.target.value;

    this.setState({
      searchType: searchType
    });
  }

  retrieveExpenses() {
    ExpenseDataService.getAll()
      .then(response => {
        this.setState({
          expenses: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveExpenses();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveExpense(expense, index) {
    this.setState({
      currentExpense: expense,
      currentIndex: index
    });
  }

  removeAllExpenses() {
    ExpenseDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchType() {
    ExpenseDataService.findByType(this.state.searchType)
      .then(response => {
        this.setState({
          expenses: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchType, expenses, currentExpense, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by type of Expense"
              value={searchType}
              onChange={this.onChangeSearchType}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchType}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Expenses List</h4>

          <ul className="list-group">
            {expenses &&
              expenses.map((expense, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveExpense(expense, index)}
                  key={index}
                >
                  Rs.{expense.expense}
                </li>
              ))}
          </ul>

          <br></br>

          <button
            className="btn btn-danger mr-2"
            onClick={this.removeAllExpenses}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentExpense ? (
            <div>
              <h4>Details of Expense</h4>
              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentExpense.type}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentExpense.description}
              </div>
              <div>
                <label>
                  <strong>Date:</strong>
                </label>{" "}
                {currentExpense.createdAt}
              </div>

              <br></br>

              <Link
                to={"/expenses/" + currentExpense.id}
                className="btn btn-info"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Expense to get more details...</p>
            </div>
          )}
        </div>
      </div>
      );
  }
}