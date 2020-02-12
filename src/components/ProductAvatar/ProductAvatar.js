import React from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const ProductAvatar = props => {
  const styles = {
    bigAvatar: {
      marginLeft: "20px",
      width: 200,
      height: 200,
      borderRadius: "5px",
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  };
  return (
      <Avatar
        style={styles.bigAvatar}
        variant="square"
        alt="Product Avatar"
        src={props.source}
      />

  );
};

export default ProductAvatar;
