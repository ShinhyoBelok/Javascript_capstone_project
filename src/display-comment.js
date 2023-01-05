// import { showPopup, getComments, addLike, popup, getCommentID } from './popup-comment.js';
import { showPopup, popup, getComments } from './popup-comment.js';

/// / Comment button
const buttonPressed = async (e) => {
  const sid = e.target.id.substring(4);
  // console.log(e.target.id, sid); // Get ID of Clicked Element
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${sid}`;
  await fetch(pokemonUrl)
    .then((response) => response.json())
    .then((json) => {
      const pokemon = json;
      const { name } = pokemon;
      // const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
      // const image = pokemon.sprites.front_default;
      const image = pokemon.sprites.other.dream_world.front_default;
      // const image = pokemon.sprites.other.official-artwork.front_default;
      const info = `
      <p class="popup-detail-item">Height : ${pokemon.height}</p>
      <p class="popup-detail-item">Weight : ${pokemon.weight}</p>
      <p class="popup-detail-item">Base Experience : ${pokemon.base_experience}</p>
      <p class="popup-detail-item">Moves : ${pokemon.moves.length}</p> `;
      showPopup(name, image, info);
      getComments(sid);
      // getCommentID(sid);
      popup.classList.toggle('display');
    });
};

const addeventComment = () => {
  const commentButtons = document.querySelectorAll('.comments');
  commentButtons.forEach((button) => {
    button.addEventListener('click', buttonPressed);
  });
};

export default addeventComment;
