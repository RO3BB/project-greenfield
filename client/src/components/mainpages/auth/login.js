import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductList from '../product/ProductList.js'


export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    login(e) {
        e.preventDefault();
        //console.log(this.state.email)
        axios.post('http://localhost:3500/user/login',this.state
        ).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h4>LOGIN</h4>
                    <label>E-mail : </label>
                    <input type='text' id='email' value={this.state.email} onChange={this.handleChange}></input>
                    <label>Password : </label>
                    <input type='text' id='password' value={this.state.password} onChange={this.handleChange}></input>
                    <button onClick={() => {this.login();this.props.loginToggle();}}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;