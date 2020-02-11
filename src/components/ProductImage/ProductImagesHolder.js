import React from "react";
import ProductImages from "./ProductImages"
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import { Card, CardContent } from "@material-ui/core";

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
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, products } = this.state;

        const imagePlaceholder = {
            border: '2px light grey', 
            width: "100%", 
            height: "500px", 
            overflow: "scroll", 
            overflowX: "hidden", 
            backgroundColor: "white"
        };

        const headerStyle = {
            padding: "10px", 
            listStyle: "none", 
            display: "flex", 
            justifyContent: "space-between" 
        };

        return (
            <Card style={imagePlaceholder}>
                <CardContent>
                <div style={headerStyle} >

                    <div style={{display:"flex"}}> <ImageIcon fontSize="medium" />Images ({products.length || 6})</div>

                    <Button style={{ height: "40px" }} variant="outlined">Manage</Button>

                </div>

                <ProductImages products={products} />
                </CardContent>
            </Card>
        )
    }

};

export default ProductImagesHolder;
