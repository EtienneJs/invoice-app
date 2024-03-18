import React from "react";
import PropTypes from 'prop-types';
import { useInvoiceContext } from "../context/InvoiceContext";

export const RowProduct = ({ item, id,setFormData }) => {
  const {handleDeleteItems,setIndex} = useInvoiceContext();
  const { product, price, quantity } = item;  
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className="btn btn-danger" onClick={()=>handleDeleteItems(id)}> Borrar </button></td>
        <td><button className="btn btn-info" onClick={()=>{setIndex(id); setFormData({productValue:product,priceValue:price,quantityValue:quantity})}}> update </button></td>
      </tr>
    </>
  );
};
RowProduct.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
}