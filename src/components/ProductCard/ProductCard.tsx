import React from 'react';

const ProductCard = ({ title, price, currency, free_shipping, picture }) => {
  return (
    <div>
      <img src={picture} alt="" width="20%" />
      <div>{title}</div>
      <div>{price + ' ' + currency}</div>
      <div>{free_shipping ? "Free" : "Na"}</div>
    </div>
  );
};

export default ProductCard;
