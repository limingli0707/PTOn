import React from 'react';
import { Avatar } from '@material-ui/core';
import './ProductAvatar.css';

const ProductAvatar = props => {

    const styles = {
        row: {
            display: 'flex',
            justifyContent: 'center',
        },
        avatar: {
            margin: 10,
        },
        bigAvatar: {
            width: 200,
            height: 200,
        },
    };
    return (

        <Avatar style={styles.bigAvatar}  variant="round" alt="Product Avatar" src={props.source} />
    );
};

export default ProductAvatar;