import React from "react";
import ProductImagesHolder from '../ProductImagesHolder';
import Grid from "@material-ui/core/Grid";
import ProductDetailHeader from '../ProductDetailHeader/ProductDetailHeader';
import PerformanceLayout from "../performance/PerformanceLayout";
import DetailTabs from '../details_tab'

const ProductDetail =  props => {
    return (
        <div>
            <ProductDetailHeader />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <ProductImagesHolder />
                </Grid>
                <Grid item xs={5}>
                    <DetailTabs />
                </Grid>
                <Grid item xs={3}>
                    <PerformanceLayout></PerformanceLayout>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDetail;
