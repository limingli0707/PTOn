import React from 'react';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors'

const ProductTitle = props => {

    const styles = {
        title: {
            color: grey[800], 
            fontSize: '1.8em'
        },
        subTitle: {
            color: grey[700], 
            fontSize: '1em'
        }
    };

    return (
        <div >
            <Typography variant="h4" style={styles.title}>{props.productDescription}</Typography>
            <Typography variant="h6" style={styles.subTitle}>{props.productId}</Typography>
        </div>
    );
};

export default ProductTitle;