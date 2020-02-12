import React from 'react';
import {Grid} from '@material-ui/core';
import AppTile from '../AppTile';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(2),
      marginLeft: '15%'
    }
  }));

const DownloadedAppList = props => {
    const classes = useStyles();
    return (      
    <div id="downloadedApps" className={classes.root}>
      <Grid container spacing={3}>
      {props.products.map(product => {
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
  </div>);
};

export default DownloadedAppList;