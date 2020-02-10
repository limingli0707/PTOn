import React from 'react';
import { Button } from '@material-ui/core';

const ProductDetailHeader = props => {
    return (
        <div> 
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