import React from 'react'
import { RowProduct } from './RowProduct'
import PropTypes from 'prop-types';


export const ProductView = ({items, title,setFormData}) => {
  return (
    <>
         <h3> {title} </h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                    <RowProduct item={item} key={index} id={index} setFormData={setFormData}/>
              ))}
            </tbody>
          </table>
    </>
  )
}
ProductView.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}