/**
* @jest-environment jsdom
*/
import pokemonCounter from "../homeCounter.js";

const mockPokemonCardCreation = (numCard) => {
  document.body.innerHTML = `
  <header class="dflex">
    <nav class="dflex">
      <img src="" alt="Pokemon Logo" class="logo">
      <a href="#">Pokemons<span class="home-counter"></span></a>
    </nav>
  </header>
  `;
  for (let i = 0; i < numCard; i += 1) {
    const pokemonCardTemplate = `
      <article class="pokemonCard dflex">
        <img class="pokemonPic" src="Link${i}" alt="Pokemon pic">
        <div class="pokemonDetail dflex">
          <p class="name">name${i}</p>
          <p class="likes dflex">
            <img class="likeIcon" id="heart${i}" src="https://img.icons8.com/color/512/heart-pokemon.png" alt="heart">
            <span><span class="likeText" id="like${i}">0</span>&nbsp;Likes</span>
          </p>
        </div>
        <button class="comments" id="cBtn${i}" >Comments</button>
      </article>
    `;
    document.body.innerHTML += pokemonCardTemplate;
  }
};



describe('homePage-counter', () => {
  test('Correctly count the num of pokemon cards test1', () => {
    const num = 16;
    mockPokemonCardCreation(num); 
    let count = pokemonCounter();
    expect(count).toBe(num);
  });
  test('Correctly count the num of pokemon cards test2', () => {
    const num = 24;
    mockPokemonCardCreation(num); 
    let count = pokemonCounter();
    expect(count).toBe(num);
  });
  test('Correctly count the num of pokemon cards test3', () => {
    const num = 1;
    mockPokemonCardCreation(num); 
    let count = pokemonCounter();
    expect(count).toBe(num);
  });
  test('Correctly display the num of cards in the DOM', () => {
    const num = 15;
    mockPokemonCardCreation(num); 
    let count = pokemonCounter();
    const homeCounter =  document.querySelector('.home-counter');
    expect(homeCounter.innerHTML).toBe(`&nbsp;(${count})`);
  });
});
