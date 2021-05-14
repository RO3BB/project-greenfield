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
        this.handleChangeView = this.handleChangeView.bind(this);
    }

    handleChangeView(){
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <div>
                {this.props.isLoggedIn === true 
                    ? <ProductList products={this.state.products}  />
                    : <Register  change={this.handleChangeView}/>
                }
            </div>
        )
    }
}

export default App;


