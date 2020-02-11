import React, { useState } from 'react';
import { Button, Select, TextField, AppBar, Typography, Toolbar, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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
}));

const ProductListHeader = props => {
    const classes = useStyles();
    const [status, setStatus] = React.useState('');

    return (
        <div>
            <Box pt={5} pl={5} pr={5} pb={5}>
                <Grid container alignItems="flex-start" justify="flex-start" direction="row" >

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>

                            <Grid container alignItems="flex-start" justify="flex-start" direction="row" spacing={10}>
                                <Grid item><div><Typography variant="h5">Jewellery/Sale</Typography></div></Grid>
                                <Grid item>

                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={status}
                                            onChange={setStatus}
                                        >
                                            <MenuItem value={10}>Online</MenuItem>
                                            <MenuItem value={20}>Offline</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>

                            <Box pt={5}><div>
                                <Typography variant="h7">100 Products - 80 Active</Typography>
                            </div></Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <Grid container alignItems="flex-start" justify="flex-end" direction="column" >
                                <Grid container alignItems="flex-start" justify="flex-end" direction="row" spacing={2}>
                                    <Grid item><Button variant="outlined" color='inherit'>Offline</Button></Grid>
                                    <Grid item><Button variant="outlined" color='inherit'>Task</Button></Grid>
                                    <Grid item><Button variant="outlined" color='inherit'>Promote</Button></Grid>
                                    <Grid item><Button variant="outlined" color='inherit'>Publish</Button></Grid>
                                    <Grid item><Button variant="outlined" color='inherit'>Preview</Button></Grid>
                                </Grid>

                                <Grid container alignItems="flex-start" justify="flex-end" direction="row" spacing={2}>
                                    <Box pt={5}>

                                        <Paper component="form" className={classes.root}>

                                            <IconButton className={classes.iconButton} aria-label="menu">
                                                <MenuIcon />
                                            </IconButton>
                                            <InputBase
                                                className={classes.input}
                                                placeholder="Search Products"
                                                inputProps={{ 'aria-label': 'search products' }}
                                            />
                                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                                <SearchIcon />
                                            </IconButton>

                                        </Paper>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default ProductListHeader;