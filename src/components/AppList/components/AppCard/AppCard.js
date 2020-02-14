import React, {useState, useEffect} from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {useApps} from '../AppContextProvider/AppContextProvider';
import { getDynamicStyles } from 'jss';

const useStyles = makeStyles(theme => ({
  root: {
    height: 280, 
    overflow:'scroll'
  },
  imageContainer: {
    height: 48,
    width: 48,
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
  const [apps, setApps] = useApps();
  const downloadStatusEnum = Object.freeze({
    DOWNLOADED:   'downloaded',
    DOWNLOADING:  'downloading',
    NEW: 'new'
  });
  const [downloadStatus, setDownloadStatus] = useState(downloadStatusEnum.NEW);
  const [progress, setProgress] = React.useState(0);
  
  function tick() {
    setProgress(oldProgress => {
      if(oldProgress< 100)
      {
        return oldProgress + 1;
      }
      return oldProgress;
    });
  }

  useEffect(()=>{
    let interval;
    if (downloadStatus === downloadStatusEnum.DOWNLOADING && progress === 0) {
      interval = setInterval(tick, 20);
    }
    if (progress >= 100) {
      setDownloadStatus(downloadStatusEnum.DOWNLOADED);
      setApps(prevState => {
        return [...prevState, product];
      })
      console.log(apps);
    }
    console.log(downloadStatus);
    console.log(progress);
    return () => clearInterval(interval);
  },[progress]);

  function getStyles () {
    return {
      backgroundColor: downloadStatus === downloadStatusEnum.DOWNLOADED ? '#81D4FA' : 'white'
    };
  }
  function handleDownload(e) {
    e.preventDefault();
    setDownloadStatus(downloadStatusEnum.DOWNLOADING);
    setInterval((tick), 20);
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
      style={getStyles()}
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
          variant="subtitle2"
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
      <Divider />
      <CardActions>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
            xs={10}
          >
            <IconButton size='small'><AccessTimeIcon className={classes.statsIcon} /></IconButton>
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
            xs={10}
          >
            {downloadStatus ===  downloadStatusEnum.DOWNLOADED &&  <IconButton size='small' color='primary' onClick={goToApp}><OpenInNewIcon className={classes.statsIcon}/></IconButton> }
            {downloadStatus ===  downloadStatusEnum.DOWNLOADING &&  <IconButton size='small'><CircularProgress  className={classes.statsIcon} size={20} value={progress} /></IconButton> }
            {downloadStatus ===  downloadStatusEnum.NEW &&  <IconButton size='small' color='primary' onClick={handleDownload}><CloudDownload className={classes.statsIcon} /> </IconButton> }
            <Typography
              display="inline"
              variant="body2"
            >
              {product.totalDownloads} Downloads
            </Typography>
          </Grid>
          <Grid item xs={10} className={classes.statsItem}><Rating size="medium" name="read-only" defaultValue={4} readOnly /></Grid>
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