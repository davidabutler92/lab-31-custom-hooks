export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(({ results }) =>
      results.map((result) => ({
        id: result.id,
        image: result.image,
        name: result.name,
        status: result.status,
        species: result.species,
      }))
    );
};
