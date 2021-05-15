import React from 'react';
import axios from 'axios';
import data from './data.json';
import './Product.css';
//import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCartIcon";
//import Button from "@material-ui/core/Button";
//import AddIcon from "@material-ui/icons/Add";
//import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Container, Row, Col } from 'reactstrap';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            name: '',
            email: '',
            password: '',
            emailLog: '',
            passwordLog: '',
            productForm: false,
            cart: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
        this.addToCart = this.addToCart.bind(this);

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
        ).then((response) => {
            console.log(response)
            alert(response.data.msg)
            if (response.data.msg === 'this user logged in')
                this.setState({ productForm: true })
        }).catch((err) => {
            console.log(err)
            this.setState({ productForm: false })
        })
    }


    addToCart(prod) {
        console.log(prod)
        var currentCart = [];
        if (this.state.cart) { currentCart = this.state.cart }
        currentCart.push(prod);
        this.setState({ card: currentCart })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>Register</Col>
                        <Col>Login</Col>
                        <Col>{this.state.name}</Col>
                        <Col><Badge color="secondary" badgeContent={this.state.cart.length}>
                            <AddIcon />{" "}
                        </Badge></Col>
                    </Row>
                </Container>
                
                {this.state.productForm ? <div><h1>Product Component{this.state.cart.length}</h1>

                    {
                        this.state.data.map((cat, index) => (

                            <div className="card" key={index}>


                                <img className="image" src={cat.image} />
                                <h1>{cat.name}</h1>
                                <p className="price">{cat.price}£</p>
                                <p>{cat.description}</p>
                                <p><button onClick={() => this.addToCart(cat)}>Add to Cart</button></p>

                            </div>



                        ))
                    }</div> : <div><div>
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
                    </div></div>}




            </div>
        )
    }
}

export default ProductList;
