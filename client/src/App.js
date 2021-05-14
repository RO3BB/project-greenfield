import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import ProductList from './components/mainpages/product/ProductList.js';
//import Header from './components/headers/Headerjs';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { name: "name1", owner: "owner1", description: "description1" },
                { name: "name2", owner: "owner2", description: "description2" },
                { name: "name3", owner: "owner3", description: "description3" }
            ],
        }
    }

    render() {
        return (

            <div>
                
                <ProductList products={this.state.products} />
            </div>


        )
    }
}

export default App;
