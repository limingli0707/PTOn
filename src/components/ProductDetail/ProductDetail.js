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
    marginLeft: 20,
    marginRight: 20
  }
}));

const ProductDetail = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductDetailHeader />
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.container}
      >
        <Grid item xs={3}>
        <ProductImagesHolder />
        </Grid>
        <Grid item xs={5}>
        <DetailTabs />
        </Grid>
        <Grid item xs={3}>
          <Analytics product={{ name: "Diamond Stud Earings" }}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
