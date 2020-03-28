import React, { Component } from 'react';

class ExpenseTable extends React.Component {
  render() {
    const expenses = this.props.expenses;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
	      <th>Amount</th>
	      <th>Date</th>
            </tr>
            {expenses.map(expense => {
              return (
                <tr>
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
		  <td>{expense.amount}</td>
		  <td>{expense.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseTable;
