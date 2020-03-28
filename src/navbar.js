import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
	
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
	<li>
        <Link to="/logout">Logout</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
	<li>
        <Link to="/search_title">Search Title</Link>
      </li>
      <li>
        <Link to="/sort_expense">Sort Expense</Link>
      </li>
	 <li>
        <Link to="/add_expense">Add/Delete Expense</Link>
      </li>
	<li>
        <Link to="/edit_expense">Update Expense</Link>
      </li>
    </ul>
  );
};

export default NavBar;
