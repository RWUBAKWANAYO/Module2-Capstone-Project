import css from './style.css'; // eslint-disable-line
import Leagues from './modules/leagues.js';
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

window.addEventListener('load', newLeagues.fetchLeague);