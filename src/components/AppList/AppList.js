import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { AppsToolbar, AppCard, AppTile } from './components';
import mockData from './data';
import {Box} from '@material-ui/core';
import Sidebar from './components/Sidebar';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
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
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
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
