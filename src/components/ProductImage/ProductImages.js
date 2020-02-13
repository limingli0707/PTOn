import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import React from "react";

const ProductImages = ({products}) => (
  <div>
    <GridList cols={3} style={{ marginRight: "20px", marginLeft: "20px", alignContent: "center" }}>
      {products.map(tile => (
        <GridListTile key={tile.avatar_url} style={{maxHeight: '130px'}}>
          <img
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "10px",
              boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
            }}
            src={tile.avatar_url}
            alt={tile.name}
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default ProductImages;
