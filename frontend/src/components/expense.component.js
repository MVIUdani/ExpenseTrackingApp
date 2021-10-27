import React, { Component } from "react";
import ExpenseDataService from "../services/expense.service";

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeExpense = this.onChangeExpense.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.getExpense = this.getExpense.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        description: "",
        expense: "",
        type: ""

      },
      message: ""
    };
  }

  componentDidMount() {
    this.getExpense(this.props.match.params.id);
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentExpense: {
        ...prevState.currentExpense,
        description: description
      }
    }));
  }

  onChangeExpense(e) {
    const expense = e.target.value;

    this.setState(function(prevState) {
      return {
        currentExpense: {
          ...prevState.currentExpense,
          expense: expense
        }
      };
    });
  }

  onChangeType(e) {
    const type = e.target.value;

    this.setState(function(prevState) {
      return {
        currentExpense: {
          ...prevState.currentExpense,
          type: type
        }
      };
    });
  }

  getExpense(id) {
    ExpenseDataService.get(id)
      .then(response => {
        this.setState({
          currentExpense: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateExpense() {
    ExpenseDataService.update(
      this.state.currentExpense.id,
      this.state.currentExpense
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The expense was updated successfully"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteExpense() {    
    ExpenseDataService.delete(this.state.currentExpense.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/expenses')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
   const { currentExpense } = this.state;

    return (
      <div>
        <br></br>
        {currentExpense ? (
          <div className="edit-form">
            <h4>Details of Expense</h4>
            <br></br>
            <form>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentExpense.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <br></br>

               <div className="form-group">
                <label htmlFor="expense">Expense</label>
                <input
                  type="text"
                  className="form-control"
                  id="expense"
                  value={currentExpense.expense}
                  onChange={this.onChangeExpense}
                />
              </div>
              <br></br>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select
                  type="text"
                  className="form-control"
                  id="type"
                  value={currentExpense.type}
                  onChange={this.onChangeType}
                >
              <option value="Foods">Foods</option>
              <option value="Movies">Movies</option>
              <option value="Online Subscriptions">Online Subscriptions</option>
              <option value="Travelling">Travelling</option>
              <option value="Other">Other</option>
              </select>
              </div>
            </form>

            <br></br>

            <button
              type="button"
              className="btn btn-danger mr-2"
              style={{marginRight:'30px'}}
              onClick={this.deleteExpense}
            >
              Delete
            </button>

            <button
              type="button"
              className="btn btn-success"
              onClick={this.updateExpense}
            >
              Update
            </button>
            <br></br>
            <br></br>
            <p style={{color:'green'}}>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Expense...</p>
          </div>
        )}
      </div>
    );
  }
}