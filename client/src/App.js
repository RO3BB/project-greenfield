import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            emailLog: '',
            password: '',
            passwordLog: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    signup(e) {
        e.preventDefault();
        // console.log(this.state)
        axios.post('http://localhost:3500/user/signup',
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        ).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    login(e) {
        e.preventDefault();
        console.log(this.state.emailLog)
        axios.post('http://localhost:3500/user/login',
            {
                email: this.state.emailLog,
                password: this.state.passwordLog
            }
        ).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }



    render() {
        return (
            <div>
                <div><h3>SIGNUP</h3>
                    <label>name :</label>
                    <input type='text' id='name' value={this.state.name} onChange={this.handleChange}></input>
                    <label>email :</label>
                    <input type='text' id='email' value={this.state.email} onChange={this.handleChange}></input>
                    <label>password :</label>
                    <input type='text' id='password' value={this.state.password} onChange={this.handleChange}></input>
                    <button onClick={this.signup}>signup</button>
                </div>
                <div><h3>LOGIN</h3>
                    <label>email :</label>
                    <input type='text' id='emailLog' value={this.state.emailLog} onChange={this.handleChange}></input>
                    <label>password :</label>
                    <input type='text' id='passwordLog' value={this.state.passwordLog} onChange={this.handleChange}></input>
                    <button onClick={this.login}>login</button>
                </div>
            </div>
        )
    }
}

export default App;
