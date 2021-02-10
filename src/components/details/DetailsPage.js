import React from 'react';
import PropTypes from 'prop-types';

function DetailsPage({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>name: {character.name}</h1>
      <p>status: {character.status}</p>
      <p>species: {character.species}</p>
    </div>
  );
}

DetailsPage.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default DetailsPage;
