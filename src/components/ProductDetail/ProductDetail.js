import React from "react";
import ProductImagesHolder from "../ProductImage/ProductImagesHolder";
import Grid from "@material-ui/core/Grid";
import ProductDetailHeader from "../ProductDetailHeader/ProductDetailHeader";
import Analytics from "../Analytics/Analytics";
import DetailTabs from "../ProductDetailTabs/details_tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 80
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
              <Analytics product={{ name: "Diamond Stud Earings" }} />
            </Grid>
          </Grid>
    </div>
  );
};

export default ProductDetail;
