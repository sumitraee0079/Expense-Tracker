import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state: {
    navigate: false
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true});
  } ;
  render()
  {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    return <Button onclick={this.logout}>Log Out</Button>;

  }
}

export default Logout
