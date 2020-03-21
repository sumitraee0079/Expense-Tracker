import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeExpenseTitle = this.onChangeExpenseTitle.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangeamount = this.onChangeamount.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ExpenseTitle: '',
      description: '',
      amount:,
      date:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/edit_expense')
          .then(response => {
              this.setState({
                ExpenseTitle: response.data.ExpenseTitle,
                description: response.data.description,
                amount: response.data.amount,
               date: response.data.date   });
          })


  onChangePersonName(e) {
    this.setState({
      ExpenseTitle: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      amount: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      ExpenseTitle: this.state.ExpenseTitle,
      descrition: this.state.descrition,
      amount: this.state.amount,
      date: this.state.date,
    };
    axios.post('http://localhost:4000/update_expense/')
        .then(res => console.log(res.data));
  }

  render() {
    return (
        <div>
            <h3 align="center">Update Expense</h3>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Expense Title:  </label>
                    <input
                      type="text"
                      value={this.state.expenseTitle}
                      onChange={this.onChangeexpenseTitle}
                      />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text"
                      value={this.state.description}
                      onChange={this.onChangedescription}
                      />
                </div>
                <div>
                    <label>Amount: </label>
                    <input type="text"
                      value={this.state.amount}
                      onChange={this.onChangeamount}
                      />
                      <div>
                          <label>Date: </label>
                          <input type="text"
                            value={this.state.date}
                            onChange={this.onChangedate}
                          />
                </div>
                <div>
                    <input type="submit"
                      value="Update Expense"
                  />
                </div>
            </form>
        </div>
    )
  }
}
