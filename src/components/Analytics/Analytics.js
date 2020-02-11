import React from "react";
import SelectPeriod from "./SelectPeriod";
import Line from "./LineChart";
import {
  makeStyles,
  withStyles,
  Theme,
  useTheme,
  createStyles
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { red, blue, grey } from "@material-ui/core/colors";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TimelineIcon from "@material-ui/icons/Timeline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: "#1890ff"
  }
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:hover": {
        color: "#40a9ff",
        opacity: 1
      },
      "&$selected": {
        color: "#1890ff",
        fontWeight: theme.typography.fontWeightMedium
      },
      "&:focus": {
        color: "#40a9ff"
      }
    },
    selected: {}
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 375
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    header: {
      color: grey[800]
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    },
    numbers: {
      fontSize: "1.2em",
      color: grey[800],
      fontWeight: "fontWeightBold"
    },
    summary: {
      fontSize: "0.2em",
      color: grey[800]
    },
    summaryIcons: {
      marginRight: "3px",
      marginTop: "-4px"
    }
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function PerformanceLayout({ product }) {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.card}>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="Performance" />
        <AntTab label="Insights" />
        <AntTab label="Activity" />
      </AntTabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChange}
      >
        <TabPanel value={value} index={0}>
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <IconButton aria-label="settings">
                  <TimelineIcon style={{ color: "#FFFFFF" }} />
                </IconButton>
              </Avatar>
            }
            title={product.name}
          />
          <CardActions disableSpacing>
            <SelectPeriod></SelectPeriod>
          </CardActions>
          <CardMedia
            className={classes.media}
            component={Line}
            title="Paella dish"
          />
          <CardContent disableSpacing>
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid
                item
                xs={4}
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Typography paragraph className={classes.numbers}>
                  13.54%
                </Typography>
                <Typography paragraph className={classes.summary}>
                  Conversions
                </Typography>
              </Grid>

              <Grid
                item
                xs={4}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Typography paragraph className={classes.numbers}>
                  423,899
                </Typography>
                <div
                  style={{
                    display: "flex"
                  }}
                >
                  <LinearScaleIcon
                    className={classes.summaryIcons}
                    style={{ color: "blue" }}
                  />
                  <Typography paragraph className={classes.summary}>
                    Total Views
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                xs={4}
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Typography paragraph className={classes.numbers}>
                  329,766
                </Typography>
                <Grid direction="row" alignItems="center">
                  <div
                    style={{
                      display: "flex"
                    }}
                  >
                    <LinearScaleIcon
                      style={{ color: "red" }}
                      className={classes.summaryIcons}
                    />
                    <Typography paragraph className={classes.summary}>
                      Total Sales
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div> Insights </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div> Activity </div>
        </TabPanel>
      </SwipeableViews>
    </Card>
  );
}
