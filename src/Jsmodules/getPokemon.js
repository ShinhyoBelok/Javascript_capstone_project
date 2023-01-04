import showPokemon from "./displayPokemon.js";

const getAllPokemons = (num = 100) => {
  const promises = [];
  for (let id = 1; id < num; id++) {
    const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    promises.push(fetch(pokemonAPI).then(res => res.json()));
  }
  Promise.all(promises).then(res => {
    const pokemons = res.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default']
    }));
    showPokemon(pokemons);
  });
}

export default getAllPokemons;