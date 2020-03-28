import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './form1';

class AddExpense extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      amount: '',
      date: '',
      expenses: []
    }
  

  this.deleteExpense = this.deleteExpense.bind(this);
   }; 
 
  handleFormSubmit = (e) => {
    e.preventDefault();

    let expenses = [...this.state.expenses];

    expenses.push({
      title: this.state.title,
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
    });

    this.setState({
      expenses,
      title: '',
      description: '',
      amount: '',
      date: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

 deleteExpense(title) {
    return () => {
      this.setState(prevState => ({
        expenses: prevState.expenses.filter(expense => expense.title !== title)
      }));
    };
  }

  render() {
    return (
      <div className="App">
        <Table expenses={ this.state.expenses }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newTitle={ this.state.title }
          newDescription={ this.state.description }
          newAmount={ this.state.amount }
          newDate={ this.state.date } />
	 <div>
	 <table>
		<tbody>
            {this.state.expenses.map((expense, index) => {
              return (
                <tr key={expense.title}>
                  <th>{index + 1}</th>
                  <td>{expense.title}</td>
                  <td>
                    <button onClick={this.deleteExpense(expense.title)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
	</table>
	</div>
      </div>
    );
  }
}

export default AddExpense;
