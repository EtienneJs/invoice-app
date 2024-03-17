import React from "react";
import PropTypes from 'prop-types';

export const ClientView = ({ client,title }) => {
  const { name: nameClient, lastName, address:{ city, street, country, number }  } = client;
  return (
    <>
      <h3> {title} </h3>
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
    </>
  );
};

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}
