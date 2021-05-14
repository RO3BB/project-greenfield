import React from 'react';

 class ProductDetails extends React.Component {
   

    render() {
        return (
            <div>
                <h2>Im Product Details</h2>
                <h4>{this.props.product.name}</h4>
                <h4>{this.props.product.owner}</h4>
                <h4>{this.props.product.description}</h4>
            </div>
        )
    }
}

export default ProductDetails;
