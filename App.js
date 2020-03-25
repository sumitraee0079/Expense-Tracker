import React, { Component } from 'react';
import './App.css';
import LoginPage from './login';
import Logout from './logout';
import RegisterPage from './register';
import AddExpense from './add_expense';
import EditExpense from './edit_expense';
import SortDate from './sort_date';
import SortExpense from './sort_expense';
import SearchTitle from './search_title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <Logout />
        <RegisterPage />
        <AddExpense />
        <EditExpense />
        <SortDate />
        <SortExpense />
        <SearchTitle />
      
      </div>
    );
  }
}

export default App;
