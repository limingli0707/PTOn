import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

const PriceBook = ({ products }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title="Price Books"
        titleTypographyProps={{ variant: "h6" }}
        avatar={
          <Avatar style={{ backgroundColor: blue[500] }}>
            <AccountBalanceIcon />
          </Avatar>
        }
      ></CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  );
};

export default PriceBook;
