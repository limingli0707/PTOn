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
import Chip from '@material-ui/core/Chip';
import DownloadedAppList from './components/DownloadedAppList';
import AllAvailableAppList from './components/AllAvailableAppList';

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

      <DownloadedAppList products={products} />

      <Divider className={classes.divider} />
      <AllAvailableAppList products={products} />

    </div>
  );
};

export default ProductList;
