import React from 'react';
import ProductList from './components/mainpages/product/ProductList.js'
import Register from './components/mainpages/auth/Register.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { name: "name1", owner: "owner1", description: "description1" },
                { name: "name2", owner: "owner2", description: "description2" },
                { name: "name3", owner: "owner3", description: "description3" }
            ],
            isLoggedIn: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);

    }
    handleLoginClick(e) {
        e.preventDefault()
        console.log('clicked');
        this.setState({ isLoggedIn: true });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                {isLoggedIn
                    ? <ProductList products={this.state.products} onClick={()=>this.handleLoginClick} />
                    : <Register  />
                }
            </div>
        )
    }
}

export default App;


