import css from './style.css'; // eslint-disable-line
import Leagues from './modules/leagues.js';
import LeagueLikes from './modules/LeagueLikes.js';
import CountLeagues from './modules/CountLeagues.js';
import logo from './assets/logo.png';
import getDetail from './modules/pop-up-details.js';

const logoImg = document.querySelector('#logo');
logoImg.src = `${logo}`;
document.onclick = (e) => {
  if (e.target.className === 'comment-button') {
    const btnId = e.target.id;
    fetch('https://api-football-standings.azharimm.site/leagues').then((res) => res.json())
      .then((data) => {
        data.data.forEach((item) => {
          if (item.id === btnId) {
            getDetail(item);
          }
        });
      });
  }
};
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
  CountLeagues();
});