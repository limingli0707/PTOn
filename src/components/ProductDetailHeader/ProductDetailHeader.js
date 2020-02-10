import React from 'react';
import { Button } from '@material-ui/core';
import ProductAvatar from "../ProductAvatar/ProductAvatar";

const ProductDetailHeader = props => {
    return (
        <div>
            <ProductAvatar source="https://i.pinimg.com/originals/fd/45/08/fd45084c3a469854444bb5ff619f2d8d.png"/>
            <div>
            <Button variant="contained">Default</Button>
            <Button variant="contained">Task</Button>
            <Button variant="contained">Duplicate</Button>
            <Button variant="contained">Remote</Button>
            <Button variant="contained" color="primary">Preview</Button>
            </div>
            <div>
                PTOn Full Zip Fleece
            </div>
        </div>
    );
};

export default ProductDetailHeader;