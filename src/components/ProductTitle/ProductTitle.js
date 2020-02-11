import React from 'react';

const ProductTitle = props => {

    return (
        <div>
            <div>{props.productDescription}</div>
            <div>{props.productId}</div>
        </div>
    );
};

export default ProductTitle;