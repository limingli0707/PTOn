import React from 'react';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors'

const ProductTitle = props => {

    return (
        <div>
            <Typography variant="h4" style={{ color: grey[800]}}>{props.productDescription}</Typography>
            <Typography variant="h6" style={{ color: grey[700]}}>{props.productId}</Typography>
        </div>
    );
};

export default ProductTitle;