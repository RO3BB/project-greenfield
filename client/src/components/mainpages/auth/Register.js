/*import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';

export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
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
        ).then((data) => {
            console.log(data.data)
            alert(data.data.msg)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
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
                    <button onClick={this.signup}>Signup</button>
                    
                </div>
            </div>
        )
    }
}

export default Register;*/
