import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450,
      padding: 10,
      marginTop: 10,
      
    },
    gridTile: {
      marginBottom: 30,
      borderRadius: "10px",
      boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);
const products = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71dclfJ89kL._AC_UY695_.jpg",
    title: "Pink Angel 18K Rose Gold",
    author: "Rose Gold"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61cl32CRHbL._AC_UX695_.jpg",
    title: "Sterling Silver Gemstone",
    author: "created-emerald"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71zZzTUZrBL._AC_UX695_.jpg",
    title: "White Sapphire Halo ",
    author: "created-emerald"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81TYNhNHxJL._AC_UY695_.jpg",
    title: "Angel Wing Heart Necklaces",
    author: "Colorful"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71AzcPoABsL._AC_UY695_.jpg",
    title: "ImFine Jewelry Women Giftsage",
    author: "Pink"
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81n1fNrg7HL._AC_UY695_.jpg",
    title: "Genuine Bohemian Garnet",
    author: "UNIQUE GEM"
  }
];

const EinsteinRecommendations = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="Einstein Recommendations"
        titleTypographyProps={{ variant: "h6" }}
        avatar={
          <Avatar style={{ backgroundColor: blue[500] }}>
            <DynamicFeedIcon />
          </Avatar>
        }
      ></CardHeader>
      <CardContent>
        <div className={classes.root}>
          <GridList cols={1} cellHeight={200} className={classes.gridList}>
            {products.map(tile => (
              <GridListTile key={tile.img} className={classes.gridTile}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </CardContent>
    </Card>
  );
};

export default EinsteinRecommendations;
