import React from 'react';
import PropTypes from 'prop-types';

function DetailsPage({ image, name, status, species }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>name: {name}</h1>
      <p>status: {status}</p>
      <p>species: {species}</p>
    </div>
  );
}

DetailsPage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default DetailsPage;
