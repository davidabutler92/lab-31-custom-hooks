import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ name, image }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </li>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ListItem;
