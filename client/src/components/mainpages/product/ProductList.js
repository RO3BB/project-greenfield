import React from 'react';
import ProductDetails from './ProductDetails.js';

 class ProductList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
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
