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
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    //const { products } = this.state;
    //console.log('proucts: ', products)

      const products = [
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61I0HEK7s6L._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61k6QHc4isL._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61mQkZrOP1L._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/51SkCjRjxvL._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61lUHvX2w%2BL._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61esXSre3fL._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61qKFs3YBML._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61k6QHc4isL._UY695_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61myl-bNEOL._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61lBmaqaVFL._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61cSpuTIwyL._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61RCBNug6gL._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/51sK5UTQU-L._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/61cwVCk%2B-UL._SY695._SX._UX._SY._UY_.jpg"},
          {"avatar_url": "https://images-na.ssl-images-amazon.com/images/I/71Zr48fRraL._SY695._SX._UX._SY._UY_.jpg"},
      ]
    
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
