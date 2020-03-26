import React, { Component } from 'react';
import './App.css';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-dropdown';
import { Redirect } from "react-router-dom";

import LoginPage from './login';
import Logout from './homepage';
import SortExpense from './homepage';
import SearchTitle from './homepage';
import ExpenseManager from './expense_manager';

class App extends Component {
  render() {
	const titles =
    [
        "Mobile",
        "Laptop",
        "Pen",
        "Pencil"
    ];

    return (
      <div className="App">
        <LoginPage />
	<Logout />
	<SortExpense />
	<SearchTitle content = {titles}/>
	<ExpenseManager />
	</div>
);
}
}
export default App;
