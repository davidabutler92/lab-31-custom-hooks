import React from 'react';
import PropTypes from 'prop-types';

function DetailsPage({ character }) {
  console.log(character, 'inside detail page');
  return (
    <div>
      <img src={character.image} alt={name} />
      <h1>name: {character.name}</h1>
      <p>status: {character.status}</p>
      <p>species: {character.species}</p>
    </div>
  );
}

DetailsPage.propTypes = {
  character: PropTypes.object,
};

export default DetailsPage;
