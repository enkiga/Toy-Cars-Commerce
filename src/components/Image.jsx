import React from "react";
import { Card } from "react-bootstrap";

const Image = ({ imageUrl, name }) => {
  return (
    <Card.Img
      variant="top"
      src={imageUrl}
      alt={name}
      className="product-image"
    />
  );
};

export default Image;
