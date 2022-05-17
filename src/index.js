import css from './style.css'; // eslint-disable-line
import Leagues from './modules/leagues.js';
import logo from './assets/logo.png';

const logoImg = document.querySelector('#logo');
logoImg.src = `${logo}`;

const newLeagues = new Leagues();

window.addEventListener('load', newLeagues.fetchLeague);