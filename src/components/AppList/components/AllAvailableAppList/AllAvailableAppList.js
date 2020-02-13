import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppCard from '../AppCard';
import Chip from '@material-ui/core/Chip';
import { Grid, Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(2),
      marginLeft: '15%'
    }
  }));

const AllAvailableAppList = props => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container  justify="space-between">
        <Grid item xs={3}><Chip size="medium" label="Recommanded" /></Grid>
        <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
        </Grid>
      </Grid>
      {props.products.filter(product => product.category === "Recommanded").map(product => (
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
        <Grid item xs={3}><Chip size="medium" label="Inventory Management" /></Grid>
        <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
        </Grid>
      </Grid>
      {props.products.filter(product => product.category === "Inventory Management").map(product => (
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
        <Grid item xs={3}><Chip size="medium"  label="Sales Analytics" /></Grid>
        <Grid item xs={1}><Button size='small' variant="contained" color="primary">See More</Button></Grid>
        </Grid>
      </Grid>
      {props.products.filter(product => product.category === "Sales Analytics").map(product => (
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
);
};

export default AllAvailableAppList;





