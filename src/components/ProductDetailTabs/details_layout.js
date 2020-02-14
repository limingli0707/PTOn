import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    height: '450px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  label: {
    color: "#aaa"
  },
  content: {
    color: "#000"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent disableSpacing>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.label}>Product Name</div>
              <div>Allegra K Women's Kitten Heel Lace up Sandals</div>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.label}>Product ID</div>
              <div>SD48123485</div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.label}>Product Description</div>
              <div>
                A closet essential that every girl needs. The everyday shoe that can be worn any season and will soon replace your other trendy shoes.<br/>
                SIMPLE AND COMFORTABLE: Feel confident to wear these during any occasion with a walkable heel and ankle strap to keep you in place.<br/>
                DRESS IT UP OR DOWN: These perfect high heels up the chic factor to any look from your brunch outfit to your little black dress.
                Go ahead – put them on and you’ll feel confident to rock the day (or night) away!<br/><br/>
                MEASUREMENTS: Heel 3”.
                FIT: Runs true to size.
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.label}>Brand</div>
              <div>Allegra</div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.label}>Product Type</div>
              <div>Footwear</div>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
