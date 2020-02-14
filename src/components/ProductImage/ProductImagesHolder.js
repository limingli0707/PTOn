import React from "react";
import ProductImages from "./ProductImages";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import { Card, CardContent } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PermMediaIcon from "@material-ui/icons/PermMedia";

class ProductImagesHolder extends React.Component {
  // For later use to integrate with Mule API (Products)
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  /* fetch('https://{shortCode}.api.commercecloud.salesforce.com/product/products/v1/organizations/{organizationId}/products/{productId}')
        .then((response) => {
    return response.json(); // or .text() or .blob() ...
    })
    .then((text) => {
    // text is the response body
    })
    .catch((e) => {
        // error in e.message
    });
   */

  componentDidMount() {
    var params = {
        grant: 'client_credentials'
    };
    var formData = new FormData();
    for (var k in params) {
        formData.append(k, params[k]);
    }
    fetch('https://account.demandware.com/dw/oauth2/access_token', {
        method: 'POST',
        body: formData,
        headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Authorization": "Basic ZjY2ZjBlNGYtZmE0NC00MWViLTliMzUtODlkZTllZTY3ZTcxOm1lcmN1cnkxY2NkeA=="
        }
    }).then(response => {
        console.log("yayyyyy");
            return response.json()
        }).then(json => {
            this.setState({
                user:json
            });
        });}

  render() {
    const { products } = this.state;
    console.log('proucts: ', products)
    
    const imagePlaceholder = {
      width: "100%",
      maxHeight: "415px",
      overflow: "scroll",
      overflowX: "hidden"
    };

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{backgroundColor: red[500]}}>
              <PermMediaIcon />
            </Avatar>
          }
          action={
            <Button
              style={{ marginTop: "10px", marginRight: "10px" }}
              variant="outlined"
            >
              Manage
            </Button>
          }
          titleTypographyProps={{ variant: "h6" }}
          title={"Images (" + (products.length || 0) + ")"}
        />
        <CardContent style={imagePlaceholder}>
          <ProductImages products={products} />
        </CardContent>
      </Card>
    );
  }
}

export default ProductImagesHolder;
