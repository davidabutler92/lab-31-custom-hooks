import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../listItem/ListItem';

function List({ characters }) {
  const charactersList = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/detail/${character.id}`}>
        <ListItem image={character.image} name={character.name} />
      </Link>
    </li>
  ));

  return <ul data-testid="characters">{charactersList}</ul>;
}

List.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

export default List;
