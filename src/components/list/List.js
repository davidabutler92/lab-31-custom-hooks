import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../listItem/ListItem';

function List({ characters }) {
  console.log(characters, 'inside list page');
  const charactersList = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <ListItem image={character.image} name={character.name} />
      </Link>
    </li>
  ));

  return <ul data-testid="characters">{charactersList}</ul>;
}

List.propTypes = {
  characters: PropTypes.array,
};

export default List;
