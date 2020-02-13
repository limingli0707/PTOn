import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
const PriceBook = () => {
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
