import './style.css';
import logo from './img/logo.png';
import getAllPokemons from './Jsmodules/getPokemon.js';
import './display-comment.js';

document.querySelector('.logo').src = logo;
getAllPokemons();