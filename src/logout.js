import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Logout extends Component {

  logout = () => {
    localStorage.clear();
	window.location.href = '/';
  } ;
  render()
  {	
	return(
		<a href="#" onClick={this.logout()}>LOGOUT</a>	
)
    }


  }

