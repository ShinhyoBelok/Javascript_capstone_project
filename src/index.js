import './style.css';
import logo from './img/logo.png';
import getAllPokemons from './Jsmodules/getPokemon.js';

document.querySelector('.logo').src = logo;
getAllPokemons();
