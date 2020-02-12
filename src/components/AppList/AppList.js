import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { AppsToolbar, AppCard, AppTile } from './components';
import mockData from './data';
import {Box} from '@material-ui/core';
import Sidebar from './components/Sidebar';
import { Divider } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/More';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    marginLeft: '15%'
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <Box mt={20}> <AppsToolbar /></Box>
      <Sidebar />


      <div id="downloadedApps" className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => {
            if (product.downloaded == true) return (
            <Grid
              item
              key={product.id}
              lg={2}
              md={2}
              xs={4}
            >
              <AppTile product={product} />
            </Grid>
          )}
        )}
        </Grid>
      </div>

      <Divider className={classes.divider} />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <Grid container  justify="space-between">
            <Grid item xs={3}><Typography variant="h6">Top Free Apps</Typography></Grid>
            <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
            </Grid>
          </Grid>
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={2}
              md={2}
              xs={4}
            >
              <AppCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <Grid container  justify="space-between">
            <Grid item xs={3}><Typography variant="h6">Store Design</Typography></Grid>
            <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
            </Grid>
          </Grid>
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={2}
              md={2}
              xs={4}
            >
              <AppCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <Grid container  justify="space-between">
            <Grid item xs={3}><Typography variant="h6">Orders and Shipping</Typography></Grid>
            <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
            </Grid>
          </Grid>
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={2}
              md={2}
              xs={4}
            >
              <AppCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductList;
