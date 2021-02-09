import React from 'react';
import List from '../components/list/List';
import { useCharacters } from '../components/hooks/characterHook';

export default function charactersPage() {
  const { characters, loading } = useCharacters();
  console.log(characters, loading, 'inside container');
  if (loading) return <div>loading</div>;
  return <List characters={characters} />;
}
