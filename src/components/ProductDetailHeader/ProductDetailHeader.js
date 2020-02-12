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
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import ProductAvatar from "../ProductAvatar/ProductAvatar";
import ProductTitle from "../ProductTitle/ProductTitle";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faTasks } from '@fortawesome/free-solid-svg-icons';
import AssignmentIcon from "@material-ui/icons/Assignment";
import AllOutIcon from "@material-ui/icons/AllOut";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "7em",
    position: "relative",
    overflow: "visible"
  },
  button: {
    margin: theme.spacing(1)
  },
  image: {
    margin: "-60px auto 0",
    width: "80%",
    height: 140,
    marginLeft: 1,
    borderRadius: "4px",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 1000
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
      <div position="static">
        <Toolbar style={{ left: 15 }}>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<AllOutIcon />}
          >
            Default
          </Button>
          <Button
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon={faTasks} />}
          >
            Task
          </Button>
          <Button
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={ <FontAwesomeIcon icon={faClone} />}
          >
            Duplicate
          </Button>
          <Button
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<SettingsRemoteIcon />}
          >
            Remote
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SendIcon />}
          >
            Preview
          </Button>
        </Toolbar>
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
              <div className={classes.image}>
                <ProductAvatar source="https://www.diamondstuds.com/images/homepage/ds.jpg" />
              </div>
            </Grid>

            <Grid item xs={5}>
              <ProductTitle
                productDescription="Diamond Stud Earrings"
                productId="SD12345"
              />
            </Grid>

            <Grid item xs={6}>
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
