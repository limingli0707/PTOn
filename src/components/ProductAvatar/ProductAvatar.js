import React from 'react';
import { Avatar } from '@material-ui/core';

const ProductAvatar = props => {

    const styles = {

        bigAvatar: {
            width: 150,
            height: 150,
        },
    };
    return (

        <Avatar style={styles.bigAvatar}  variant="square" alt="Product Avatar" src={props.source} />
    );
};

export default ProductAvatar;