import React from 'react';
import { useCharacters } from '../hooks/characterHook';
import { Link } from 'react-router-dom';

import ListItem from '../listItem/ListItem';

export default function List() {
  const [characters, loading] = useCharacters();

  return (
    <>
      <ul>
        {characters.map((character) => {
          <Link>
            <ListItem name={character.name} image={character.image} />;
          </Link>;
        })}
      </ul>
    </>
  );
}
