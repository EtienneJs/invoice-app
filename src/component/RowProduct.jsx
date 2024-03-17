import React from "react";
import PropTypes from 'prop-types';

export const RowProduct = ({ item }) => {
  const { product, price, quantity } = item;
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};
RowProduct.propTypes = {
    item: PropTypes.object.isRequired
}