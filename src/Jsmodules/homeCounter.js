const pokemonCounter = () => {
  const pokemonCard = document.querySelectorAll('.pokemonCard');
  const homeCounter = document.querySelector('.home-counter');
  homeCounter.innerHTML = `&nbsp;(${pokemonCard.length})`;
  return pokemonCard.length;
};

export default pokemonCounter;