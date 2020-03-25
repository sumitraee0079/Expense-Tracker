import React, { Component } from 'react';

import LoginPage from './login';
import Logout from './logout';
import RegisterPage from './register.js';
import AddExpense from './add_expense';
import EditExpense from './edit_expense';
import SortExpense from './sort_expense';
import SearchTitle from './search_title';
import SortDate from './sort_date';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddExpense />
        <EditExpense />
        <SortExpense />
        <SearchTitle />
        <SortDate />
      </div>
    );
  }
}

export default App;
