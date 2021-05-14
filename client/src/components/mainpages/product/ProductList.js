import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails.js';

 class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            emailLog: '',
            passwordLog: ''
            
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
        ).then((data) => {
            console.log(data.data)
            alert(data.data.newUser.name)
        }).catch((err) => {
            console.log(err)
        })
    }

    login(e) {
        e.preventDefault();
        //console.log(this.state.email)
        axios.post('http://localhost:3500/user/login', {
                email: this.state.emailLog,
                password: this.state.passwordLog
        }
        ).then((data) => {
            console.log(data)
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
                <div>
                    <h4>LOGIN</h4>
                    <label>E-mail : </label>
                    <input type='text' id='emailLog' value={this.state.emailLog} onChange={this.handleChange}></input>
                    <label>Password : </label>
                    <input type='text' id='passwordLog' value={this.state.passwordLog} onChange={this.handleChange}></input>
                    <button onClick={this.login}>Login</button>
                </div>

                <h1>Product Component</h1>
                {
                    this.props.products.map((product, index) => {
                        return(
                            <ProductDetails product={product} key={index} />
                        )
                        
                    })
                }
            
            </div>
        )
    }
}

export default ProductList;
