import React from "react";
import PropTypes from 'prop-types';

export const CompanyView = ({ company,title }) => {
  return (
    <>
      <h3> {title} </h3>
      <ul className="list-group">
        <li className="list-group-item">Nombre Empresa: {company.name}</li>
        <li className="list-group-item">
          Numeros Fiscales: {company.fiscalNumber}
        </li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
    company: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}