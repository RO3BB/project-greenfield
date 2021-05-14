import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            emailLog: '',
            password: '',
            passwordLog:'',
            isLoggedIn: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.signin = this.signin.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    signup() {
        axios.post('http://localhost:3500/user/signup',
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        ).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    signin() {
        axios.post('http://localhost:3500/user/login',
            {
                emailLog: this.state.emailLog,
                passwordLog: this.state.passwordLog
            }
        ).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <div>
                    <h4>SIGNUP</h4>
                    <label>Name : </label>
                    <input type='text' id='name' value={this.state.name} onChange={this.handleChange}></input>
                    <label>E-mail : </label>
                    <input type='text' id='email' value={this.state.email} onChange={this.handleChange}></input>
                    <label>Password : </label>
                    <input type='text' id='password' value={this.state.password} onChange={this.handleChange}></input>
                    <button onClick={() => {this.signup();this.handleLoginClick(isLoggedIn)}}>Signup</button>
                </div>
                <div>
                    <h4>SIGNIN</h4>
                    <label>E-mail : </label>
                    <input type='text' id='emailLog' value={this.state.emailLog} onChange={this.handleChange}></input>
                    <label>Password : </label>
                    <input type='text' id='passwordLog' value={this.state.passwordLog} onChange={this.handleChange}></input>
                    <button onClick={() => {this.signin();this.handleLoginClick(isLoggedIn)}}>signin</button>
                </div>
            </div>
        )
    }
}

export default Register;
