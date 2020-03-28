
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            isAdmin: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {

        this.setState({ isAdmin: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { register  } = this.props;
        const { user, isAdmin } = this.state;
        return (
            <div>
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label name="firstName">First Name</label>
                        <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label name="lastName">Last Name</label>
                        <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label name="username">Username</label>
                        <input type="text" name="username" value={user.username} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label name="password">Password</label>
                        <input type="password" name="password" value={user.password} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <Link to="/login">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}


export default RegisterPage
