import React from "react";
import ProductImagesHolder from "../ProductImage/ProductImagesHolder";
import Grid from "@material-ui/core/Grid";
import ProductDetailHeader from "../ProductDetailHeader/ProductDetailHeader";
import Analytics from "../Analytics/Analytics";
import DetailTabs from "../ProductDetailTabs/details_tab";
import { makeStyles } from "@material-ui/core/styles";
import StoreMap from '../StoreMap/StoreMap';
import PriceBook from '../PriceBooks/PriceBook';
import EinsteinRecommendations from '../EinsteinRecommendations/EinsteinRecommendations'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  }
}));

const ProductDetail = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        className={classes.container}
      >
        <Grid item xs={12}>
          <ProductDetailHeader />
        </Grid>
            <Grid item xs={3}>
              <ProductImagesHolder />
            </Grid>
            <Grid item xs={6}>
              <DetailTabs />
            </Grid>
            <Grid item xs={3}>
              <Analytics product={{ name: "Allegra Women's Lace up Sandals" }} />
            </Grid>
            <Grid item xs={3}>
              <StoreMap />
            </Grid>
            <Grid item xs={6}>
              <PriceBook />
            </Grid>
            <Grid item xs={3}>
              <EinsteinRecommendations />
            </Grid>
          </Grid>
    </div>
  );
};

export default ProductDetail;
