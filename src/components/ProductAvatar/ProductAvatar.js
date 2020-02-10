import React from 'react';
import { Paper } from '@material-ui/core';

const ProductAvatar = props => {

/*    function AvatarStyle() {
        let styles = {
            margin: '20px',
            width: '250px',
            height: '250px',
        };*/

    return (
        <div>
            <Paper elevation={3} >
                <img src = "https://pbs.twimg.com/media/EFQq6FRUUAA7JCu?format=jpg&name=small" alt="Product Avatar" />
            </Paper>
        </div>
    );
};

export default ProductAvatar;