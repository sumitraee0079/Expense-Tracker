import React, { Component } from 'react';
import AddExpense from './add_expense';
import EditExpense from './edit_expense';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddExpense />
        <EditExpense />
      </div>
    );
  }
}

export default App;
