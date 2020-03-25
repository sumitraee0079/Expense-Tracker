import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
      super(props);
	

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

handleSubmit(e) {
        e.preventDefault();


      this.setState({ isAdmin: true });
      const { username, password } = this.state;
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
                      <input type="text" name="username" value={username} onChange={this.handleChange} />
			{ isAdmin && !username && <div>Username is required</div>
			}
                  </div>
                  <div>
                      <label name="password">Password</label>
                      <input type="password" name="password" value={password} onChange={this.handleChange} />
			{ isAdmin && !password && <div>Password is required</div>}
                  </div>
                  <div>
                      <input type="submit" value="Login"></input>
                      {loggingIn}
                  </div>
              </form>
          </div>
      );

  }
}

export default LoginPage
