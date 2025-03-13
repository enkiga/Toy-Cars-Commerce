import React from "react";

// Read price with comma separated values
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Discount = (price) => {
  // Discount is 10% of price
  return price * 0.1;
};

const Price = ({ price }) => {
  return (
    <div className="price-tag">
      <span className="original-price">
        KES {formatPrice(price - Discount(price))}
      </span>
      <span className="discount">Save KES {formatPrice(Discount(price))}</span>
    </div>
  );
};

export default Price;
