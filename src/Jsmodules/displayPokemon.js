const pokemonContainer = document.querySelector('.pokemon-container');
const showPokemon = (pokemonList) => {
  pokemonContainer.innerHTML = '';
  for (let i = 0; i < pokemonList.length; i++) {
    const pokemonCardTemplate = `
      <article class="pokemonCard dflex">
        <img class="pokemonPic" src="${pokemonList[i].image}" alt="Pokemon pic">
        <div class="pokemonDetail dflex">
          <p class="name">${pokemonList[i].name}</p>
          <p class="likes dflex">
            <img src="https://img.icons8.com/color/512/heart-pokemon.png" alt="heart">
            <span>5 Likes</span> 
          </p>
        </div>
        <button class="comments" id="cBtn${pokemonList[i].id}" >Comments</button>
      </article>
    `;
    pokemonContainer.innerHTML += pokemonCardTemplate;
  }
}

export default showPokemon;
