import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CloudDownload from '@material-ui/icons/CloudDownload';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 80,
    width: 80,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  productTile: {
    borderRadius: "20px",
    maxHeight: "160px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "solid 1px white"
  }
}));
const AppTile = props => {
  let history = useHistory();
  const { className, product, ...rest } = props;
  const classes = useStyles();
  const [is, setIs] = useState(false);
  function handleDownload(e) {
    e.preventDefault();
    console.log('handle download');
    setIs(true);
  }
  function goToApp(e) {
    e.preventDefault();
    console.log('go to app');
    history.push('/productDetail');
  }
  return (
    <Card
      {...rest}
      className={classes.productTile}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h7"
        >
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
        </Grid>
      </CardActions>
    </Card>
  );
};
AppTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};
export default AppTile;
