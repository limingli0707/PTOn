import React from "react";
import PerformanceLayout from "./components/performance/PerformanceLayout";
import "./App.css";
import ProductDetailHeader from "./components/ProductDetailHeader/ProductDetailHeader";
import ProductAvatar from "./components/ProductAvatar/ProductAvatar";
import Grid from "@material-ui/core/Grid";

import ProductImagesHolder from "./components/ProductImagesHolder";

function App() {
  return (
    <div className="App">
      <ProductDetailHeader />
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <ProductImagesHolder />
        </Grid>
        <Grid item xs={4}>
          <PerformanceLayout></PerformanceLayout>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
