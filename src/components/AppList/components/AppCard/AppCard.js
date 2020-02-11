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
  root: {height: 250},
  imageContainer: {
    height: 64,
    width: 64,
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
  }
}));
const AppCard = props => {
  let history = useHistory();
  const { className, product, ...rest } = props;
  const classes = useStyles();
  const [isDownloaded, setIsDownloaded] = useState(false);
  function handleDownload(e) {
    e.preventDefault();
    console.log('handle download');
    setIsDownloaded(true);
  }
  function goToApp(e) {
    e.preventDefault();
    console.log('go to app');
    history.push('/productList');
  }
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
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
          variant="h6"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            {isDownloaded ? 
            <IconButton color='primary' onClick={goToApp}><OpenInNewIcon /></IconButton> : 
            <IconButton color='primary' onClick={handleDownload}><CloudDownload className={classes.statsIcon} /> </IconButton>}
            <Typography
              display="inline"
              variant="body2"
            >
              {product.totalDownloads} Downloads
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
AppCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};
export default AppCard;