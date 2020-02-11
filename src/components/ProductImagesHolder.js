import React from "react";
import ProductImages from "./ProductImages"
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';

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

        return (
            <div style={{border: '2px light grey',width: "400px", height: "500px", overflow:"scroll", overflowX:"hidden"}}>

                <div style={{padding: "10px" ,listStyle: "none",display: "flex", justifyContent:"space-between"}} >
                <ImageIcon fontSize="large" />

                <h2>Images ({products.length || 6})</h2>

                <Button style={{height:"40px"}} variant="outlined">Manage</Button>

                </div>

                <ProductImages products={products} />

            </div>
        )
    }

};


export default ProductImagesHolder;
