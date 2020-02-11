import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Product Name</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Product ID</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Description:<br/>
          Keep covered on the wall wearing a climbing-specific stretch fleece with a full-face protective hood. The stretch,
          hard-faced heathered fleece resists abrasion against the rock and features a brushed back for next-to-skin comfort.
          Constructed with underarm and side gussets for ease of movement while scaling the wall. Thumb-loop cuffs and stretch panels
          on forearms keep cuffs from sliding down when reaching for the next handhold. The full-zip front makes this warm fleece easy to layer as
          your core temperature flucturates. Durable, tri-color exposed zipper adds an unexpected pop of color for contrast.
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Brand</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Product Type</Paper>
        </Grid>

      </Grid>
    </div>
  );
}
