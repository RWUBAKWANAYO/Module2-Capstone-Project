import css from './style.css'; // eslint-disable-line
import Leagues from './modules/leagues.js';
import LeagueLikes from './modules/LeagueLikes.js';
import logo from './assets/logo.png';

const logoImg = document.querySelector('#logo');
logoImg.src = `${logo}`;

const newLeagues = new Leagues();
const newLeagueLikes = new LeagueLikes();
const checkAppId = () => { if (!localStorage.getItem('app_id')) return newLeagues.postAppId(); return null; };
const contentBody = document.querySelector('.content-body');
contentBody.addEventListener('click', (event) => {
  let card = event.target.parentElement.parentElement;
  if (event.target.tagName === 'I') {
    card = event.target.parentElement.parentElement.parentElement;
    newLeagueLikes.postLike(card.id);
  }
});
window.addEventListener('load', () => {
  checkAppId();
  newLeagues.fetchLeague();
});