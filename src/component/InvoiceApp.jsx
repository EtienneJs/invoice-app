import React from "react";
import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { city, street, country, number } = address;

  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-header">Ejemplo Factura</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Id: {id}</li>
            <li className="list-group-item">Name: {name}</li>
          </ul>
          <div className="row my-3">
            <div className="col">
              <h3> Datos del cliente </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  {nameClient} {lastName}
                </li>
                <li className="list-group-item">
                  {country} / {city}
                </li>
                <li className="list-group-item">
                  {street} {number}
                </li>
              </ul>
            </div>
            <div className="col">
              <h3> Datos de la empresa </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Nombre Empresa: {company.name}
                </li>
                <li className="list-group-item">
                  Numeros Fiscales: {company.fiscalNumber}
                </li>
              </ul>
            </div>
          </div>
          <h3> Productos de la factura </h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ price, product, quantity }, index) => (
                <tr key={index}>
                  <td>{product}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};