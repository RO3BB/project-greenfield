import React from 'react';
//import ReactDOM from 'react-dom';
//import axios from 'axios';
import ProductList from './components/mainpages/product/ProductList.js'
import Authentication from './components/mainpages/auth/Authentication.js';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { name: "name1", owner: "owner1", description: "description1" },
                { name: "name2", owner: "owner2", description: "description2" },
                { name: "name3", owner: "owner3", description: "description3" }
            ],
            currentView: "Authentication",
        }
        this.changeView = this.changeView.bind(this)

    }
    changeView(view) {
        this.setState({
            currentView: view
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.currentView === "Authentication" ? (<Authentication />):
                    (<ProductList products={this.state.products} />)}
                </div>
            </div>
        )
    }
}

export default App;


