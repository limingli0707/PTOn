import React, { useState } from "react";
import {
  Button,
  Select,
  TextField,
  AppBar,
  Typography,
  Toolbar,
  Box,
  Card,
  CardContent,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import ProductAvatar from "../ProductAvatar/ProductAvatar";
import ProductTitle from "../ProductTitle/ProductTitle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "7em",
    position: "relative",
    zIndex: 2
  },
  image: {
    flexGrow: 1,
    width: "100%",
    height: "7em",
    position: "relative",
    zIndex: 4
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  label: {
    color: "#aaa"
  }
}));

const ProductDetailHeader = props => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          <Box mr={2}>
            <Button variant="outlined" color="inherit">
              Default
            </Button>
          </Box>
          <Button variant="outlined" color="inherit">
            Task
          </Button>
          <Button variant="outlined" color="inherit">
            Duplicate
          </Button>
          <Button variant="outlined" color="inherit">
            Remote
          </Button>
          <Box ml={2}>
            <Button variant="outlined" color="inherit">
              Preview
            </Button>
          </Box>
        </Toolbar>
      </AppBar> */}
      <div className={classes.image}>
        <ProductAvatar source="https://www.diamondstuds.com/images/homepage/ds.jpg" />
      </div>
      <Card className={classes.root}>
        <CardContent>
          <Grid
            container
            justify="flex-start"
            direction="row"
            spacing={0}
            alignItems="center"
          >
            <Grid item xs={1}>

            </Grid>

            <Grid item xs={3}>
              <ProductTitle
                productDescription="Diamond Stud Earrings"
                productId="SD12345"
              />
            </Grid>

            <Grid item xs={8}>
              <Grid
                container
                direction="row"
                spacing={6}
                justify="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <FormControl>
                    <InputLabel>Language</InputLabel>
                    <Select value={"English"}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"English"}>English</MenuItem>
                      <MenuItem value={"French"}>French</MenuItem>
                      <MenuItem value={"Chinese"}>Chinese</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item>
                  <TextField
                    disabled
                    label="Price (USD)"
                    defaultValue="85"
                    variant="outlined"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    disabled
                    label="Inventory"
                    defaultValue="357,586"
                    variant="outlined"
                  />
                </Grid>

                <Grid item>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      label="4777 sold"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* <Box pt={5} pl={5} pr={5} pb={5}>
                <Grid container alignItems="flex-start" justify="flex-start" direction="row" spacing={2}>

                    <Grid item xs={1.5}>
                        <Paper className={classes.paper}>
                            <ProductAvatar source="https://www.diamondstuds.com/images/homepage/ds.jpg"/>
                        </Paper>
                    </Grid>

                    <Grid item xs={3.5}>
                        <Paper className={classes.paper}>
                            <ProductTitle productDescription="Diamond Stud Earrings" productId="SD12345"/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" spacing={2} justify="flex-end">
                                <Grid item>
                                    <FormControl variant="outlined">
                                        <InputLabel>Language</InputLabel>
                                        <Select value={'English'}>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'English'}>English</MenuItem>
                                            <MenuItem value={'French'}>French</MenuItem>
                                            <MenuItem value={'Chinese'}>Chinese</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        disabled
                                        label="Price (USD)"
                                        defaultValue="85"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        disabled
                                        label="Inventory"
                                        defaultValue="357,586"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker
                                            label="4777 sold"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box> */}
    </div>
  );
};

export default ProductDetailHeader;
