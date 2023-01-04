import './style.css';
import logo from './img/logo.png';
import getAllPokemons from './Jsmodules/getPokemon.js';
import './Jsmodules/displaylikes.js';

document.querySelector('.logo').src = logo;
getAllPokemons();