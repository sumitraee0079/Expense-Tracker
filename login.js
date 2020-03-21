

import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props) {
      super(props);

      // reset login status
      this.props.logout();

      this.state = {
          username: '',
          password: '',
          isAdmin: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }


      this.setState({ isAdmin: true });
      const { username, password } = this.state;
      if (username && password) {
          this.props.login(username, password);
      }
  }

  render() {
      const { loggingIn } = this.props;
      const { username, password, isAdmin } = this.state;
      return (
          <div>
              <h2>Login</h2>
              <form name="form" onSubmit={this.handleSubmit}>
                  <div>
                      <label name="username">Username</label>
                      <input type="text" name="username" value={username} onChange={this.handleChange} required/>
                  </div>
                  <div>
                      <label name="password">Password</label>
                      <input type="password" name="password" value={password} onChange={this.handleChange} required/>
                  </div>
                  <div>
                      <input type="submit" value="Login">
                      {loggingIn}
                      <Link to="/register">Register</Link>
                  </div>
              </form>
          </div>
      );

  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

export default LoginPage
