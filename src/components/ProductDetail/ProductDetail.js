import React from "react";
import ProductImagesHolder from '../ProductImage/ProductImagesHolder';
import Grid from "@material-ui/core/Grid";
import ProductDetailHeader from '../ProductDetailHeader/ProductDetailHeader';
import Analytics from "../Analytics/Analytics";
import DetailTabs from '../ProductDetailTabs/details_tab'

const ProductDetail =  props => {
    return (
        <div>
            <ProductDetailHeader />
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <ProductImagesHolder />
                </Grid>
                <Grid item xs={6}>
                    <DetailTabs />
                </Grid>
                <Grid item xs={3}>
                    <Analytics product= {{name: 'Diamond Stud Earings'}} ></Analytics>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDetail;
