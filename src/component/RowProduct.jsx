import React from "react";
import PropTypes from 'prop-types';

export const RowProduct = ({ item, id, remove }) => {
  const { product, price, quantity } = item;  
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className="btn btn-danger" onClick={()=>remove(id)}> Borrar </button></td>
      </tr>
    </>
  );
};
RowProduct.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
}