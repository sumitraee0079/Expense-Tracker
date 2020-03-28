import React, { Component } from 'react';
import LoginPage from './login'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import RegisterPage from './register';
import Logout from './logout';
import NavBar from "./navbar";
import SortExpense from "./sort_expense";
import SearchTitle from "./search_title";
import AddExpense from "./add_expense"
import UpdateExpense from './edit_expense'

class App extends Component {
	render(){
		return(
      <div>
	<LoginPage />
        <NavBar />
        <div className="content">
          <Switch>
	    	<Route path="/register" component={RegisterPage} />
		<Route path="/logout" component={Logout} />
		<Route path="/sort_expense" component={SortExpense} />
		<Route path="/search_title" component={SearchTitle} />
		<Route path="/add_expense" component={AddExpense} />
		<Route path="/edit_expense" component={UpdateExpense} />
		<Route path="/" />
          </Switch>
        </div>
      </div>
    );
  };
}

export default App;
