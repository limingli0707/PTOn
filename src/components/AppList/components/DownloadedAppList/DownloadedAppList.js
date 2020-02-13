import React from 'react';
import {Grid, Button, Chip} from '@material-ui/core';
import AppTile from '../AppTile';
import { makeStyles } from '@material-ui/styles';
import {useApps} from '../AppContextProvider/AppContextProvider';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(2),
      marginLeft: '15%'
    },
    empty: {
      height: "150px"
    }
  }));

  function FillEmpty(props) {
    const classes = useStyles();
    console.log("-------- FillEmpty called -------- with length:" + props.apps.length)
    const isEmpty = props.apps.length === 0;
    if (isEmpty) {

      return <Grid item lg={2} md={2} xs={4}><div id="xxxx" className={classes.empty} ></div></Grid>;
    }
    return '';
  }

const DownloadedAppList = props => {
    const classes = useStyles();
    const [apps, setApps] = useApps();
    return (
    <div id="downloadedApps" className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container  justify="space-between">
        <Grid item xs={3}><Chip size="medium" label="Browse Your Installed Apps" /></Grid>
        <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
        </Grid>
      </Grid>
      <FillEmpty apps={apps}/ >
      {apps.map(product => {
         return (
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
