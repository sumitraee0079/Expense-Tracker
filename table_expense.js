import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Dropdown from 'react-dropdown';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      response: {}
    }
  }

  componentDidMount() {

    fetch(`http://localhost/expense_tracker`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            expenses: result
          });
        },
      )
  }

  deleteExpense(ExpenseTitle) {
    const { expenses } = this.state;
    const formData = new FormData();
    formData.append('ExpenseTitle', ExpenseTitle);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch("http://localhost/delete_expense")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            expenses: expenses.filter(expense => expense.ExpenseTitle !== ExpenseTitle)
          });
        },
      )
  }

  render() {
      return(
        <div>
          <h2>Expense Tracker</h2>
          <Table>
            <thead>
            <tr>
                <th>Expense Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
                <tr key={expense.ExpenseTitle}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                  <td>
                   <input type="submit" onClick={() => this.deleteExpense(expense.ExpenseTitle)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default ExpenseList;
