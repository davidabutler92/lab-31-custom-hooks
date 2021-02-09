import React from 'react';
import DetailsPage from '../components/details/DetailsPage';
import { useCharacterById } from '../components/hooks/characterHook';

export default function detailsContainer({ match }) {
  const { character, loading } = useCharacterById(match.params.id);
  if (loading) return <h1>loading</h1>;
  return <DetailsPage character={character} />;
}
