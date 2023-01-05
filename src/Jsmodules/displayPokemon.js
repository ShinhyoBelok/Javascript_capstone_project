import addeventComment from '../display-comment.js';
import { getLikes, addeventLikes } from './displaylikes.js';

const pokemonContainer = document.querySelector('.pokemon-container');
const showPokemon = (pokemonList) => {
  pokemonContainer.innerHTML = '';
  for (let i = 0; i < pokemonList.length; i += 1) {
    const pokemonCardTemplate = `
      <article class="pokemonCard dflex">
        <img class="pokemonPic" src="${pokemonList[i].image}" alt="Pokemon pic">
        <div class="pokemonDetail dflex">
          <p class="name">${pokemonList[i].name}</p>
          <p class="likes dflex">
            <img class="likeIcon" id="heart${pokemonList[i].id}" src="https://img.icons8.com/color/512/heart-pokemon.png" alt="heart">
            <span class="likeText" id="like${pokemonList[i].id}">0 Likes</span> 
          </p>
        </div>
        <button class="comments" id="cBtn${pokemonList[i].id}" >Comments</button>
      </article>
    `;
    pokemonContainer.innerHTML += pokemonCardTemplate;
  }
  getLikes();
  addeventComment();
  addeventLikes();
};

export default showPokemon;
