import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
const EinsteinRecommendations = () => {
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
          
        </CardContent>
    </Card>
  );
};

export default EinsteinRecommendations;
