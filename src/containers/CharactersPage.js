import React from 'react';
import List from '../components/list/List';
import { useCharacters } from '../components/hooks/characterHook';

export default function charactersPage() {
  const { characters, loading } = useCharacters();
  if (loading) return <h1>loading</h1>;
  return <List characters={characters} />;
}
