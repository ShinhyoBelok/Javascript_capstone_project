const pokemonContainer = document.querySelector('.pokemon-container');

const fetchPokemon = async () => {
  await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  .then(res => res.json())
  .then(data => console.log(data))
}

export default fetchPokemon;