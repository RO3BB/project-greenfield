import React from 'react';
//import ReactDOM from 'react-dom';
//import axios from 'axios';
import Register from './components/mainpages/auth/Register.js';
import Login from './components/mainpages/auth/login.js';
import ProductList from './components/mainpages/product/ProductList.js'
import ProductDetails from './components/mainpages/product/ProductDetails.js'


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [
                {name:"name1", owner:"owner1", description:"description1"},
                {name:"name2", owner:"owner2", description:"description2"},
                {name:"name3", owner:"owner3", description:"description3"}
            ],
            currView: "register",
        }
    
    }

    render() {
        return (
            <div>
                <Register />
                <Login />
                <ProductList products={this.state.products}/>
            </div>
        )
    }
}

export default App;
