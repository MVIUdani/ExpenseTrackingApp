import React, { Component } from "react";
import ExpenseDataService from "../services/expense.service";

export default class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeExpense = this.onChangeExpense.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.newExpense = this.newExpense.bind(this);

    this.state = {
      id: null,
      description: "",
      expense: "", 
      type: "",

      submitted: false
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeExpense(e) {
    this.setState({
      expense: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  saveExpense() {
    var data = {
      description: this.state.description,
      expense: this.state.expense,
      type: this.state.type
    };

    ExpenseDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          description: response.data.description,
          expense: response.data.expense,
          type: response.data.type,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      
  }

  newExpense() {
    this.setState({
      id: null,
      description: "",
      expense: "",
      type: "",

      submitted: false
    });
  }

  render() {
     return (
      <div className="submit-form">
        <br></br>
        {this.state.submitted ? (
          <div>
            <h4 style={{color:'green'}}>You submitted successfully</h4>
            <br></br>
            <button className="btn btn-success" onClick={this.newExpense}>
              Add More
            </button>
          </div>
        ) : (
          <div>
          <h4>Add New Expense</h4>
            <br></br>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                autoComplete="off"
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <br></br>

             <div className="form-group">
              <label htmlFor="expense">Expense</label>
              <input
                type="text"
                className="form-control"
                id="expense"
                required
                autoComplete="off"
                value={this.state.expense}
                onChange={this.onChangeExpense}
                name="expense"
              />
            </div>
            <br></br>

             <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
              >
              <option value="Default">Choose Type</option>
              <option value="Foods">Foods</option>
              <option value="Movies">Movies</option>
              <option value="Online Subscriptions">Online Subscriptions</option>
              <option value="Travelling">Travelling</option>
              <option value="Other">Other</option>
              </select>
            </div>

            <br></br>

            <button onClick={this.saveExpense} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}