import React, { useState } from 'react';
import {Button, Select, TextField, AppBar, Typography, Toolbar, Box, Paper, CardContent, Card, Divider, FormControlLabel, Checkbox, Slider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ProductTitle from "../ProductTitle/ProductTitle";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AllOutIcon from "@material-ui/icons/AllOut";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClone, faTasks, faFilter, faInfo} from "@fortawesome/free-solid-svg-icons";
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";
import SendIcon from "@material-ui/icons/Send";
import {grey} from "@material-ui/core/colors";
import ProductAvatar from "../ProductAvatar/ProductAvatar";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: "7em",
        position: "relative",
        overflow: "visible"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: grey[800],
        fontSize: '1.8em'
    },
    subTitle: {
        color: grey[700],
        fontSize: '1em'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    label: {
        color: "#aaa"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width:400,
        border: "1px solid #eee",
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
    dialogControl: {
        width:500,
    },
}));

const ProductListHeader = props => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState([10, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        return `$${value}`;
    }

    return (
        <div style={{padding:"20px"}}>

            <div position="static">
                <Toolbar style={{ left: 15 }}>
                    <Typography variant="h6" className={classes.title}></Typography>
                    <Button
                        variant="contained"
                        color="inherit"
                        className={classes.button}
                        startIcon={<AllOutIcon />}
                    >
                        Offline
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
                        Publish
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
                                <ProductAvatar source="https://previews.123rf.com/images/brisker/brisker1605/brisker160500027/58489983-16-icons-of-different-products-categories-for-online-shops.jpg" />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div >
                                <Typography variant="h4" className={classes.title}>PRODUCTS</Typography>
                                <Typography variant="h7" className={classes.subTitle}>101 Products * 80 Active</Typography>
                            </div>
                        </Grid>

                        <Grid item xs={9}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <Grid item>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Search Products"
                                        inputProps={{ 'aria-label': 'search products' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Divider className={classes.divider} orientation="vertical" />
                                </Grid>
                                <Grid item>
                                    <FontAwesomeIcon icon={faFilter} className={classes.iconButton} onClick={handleClickOpen} />
                                </Grid>
                                <Grid item>
                                    <Divider className={classes.divider} orientation="vertical" />
                                </Grid>
                                <Grid item>
                                    <FontAwesomeIcon icon={faInfo} className={classes.iconButton}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle id="form-dialog-title">Filter Products By: </DialogTitle>
                <DialogContent>

                    <Grid
                        container
                        justify="flex-start"
                        direction="column"
                        spacing={3}
                        alignItems="left"
                    >
                        <Grid item>
                            <Grid
                                container
                                justify="flex-start"
                                direction="row"
                                spacing={3}
                                alignItems="center"
                            >
                                <Grid item>
                                    <Typography gutterBottom>
                                        Online
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Checkbox color="primary" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid
                                container
                                justify="flex-start"
                                direction="row"
                                spacing={3}
                                alignItems="center"
                            >
                                <Grid item>
                                    <Typography gutterBottom>
                                        Quantity
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography id="range-slider" gutterBottom>
                                Price
                            </Typography>


                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                                className={classes.dialogControl}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProductListHeader;