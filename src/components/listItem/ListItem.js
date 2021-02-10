import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ name, image }) {
  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ListItem;
