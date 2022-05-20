import css from './style.css'; // eslint-disable-line
import Leagues from './modules/leagues.js';
import LeagueLikes from './modules/LeagueLikes.js';
import CountLeagues from './modules/CountLeagues.js';
import logo from './assets/logo.png';
import getDetail from './modules/pop-up-details.js';
import FetchComments from './modules/commentsAPI.js';

const logoImg = document.querySelector('#logo');
logoImg.src = `${logo}`;

// create pop-up window:
const comments = new FetchComments();
document.onclick = (e) => {
  if (e.target.className === 'comment-button') {
    const btnId = e.target.id;
    fetch('https://api-football-standings.azharimm.site/leagues').then((res) => res.json())
      .then((data) => {
        data.data.forEach((item) => {
          if (item.id === btnId) {
            getDetail(item);
            comments.getComments(btnId);
          }
        });
      });
  }
};
// .
const newLeagues = new Leagues();
const newLeagueLikes = new LeagueLikes();
const contentBody = document.querySelector('.content-body');
contentBody.addEventListener('click', (event) => {
  let card = event.target.parentElement.parentElement;
  if (event.target.tagName === 'I') {
    card = event.target.parentElement.parentElement.parentElement;
    newLeagueLikes.postLike(card.id);
    event.target.style.color = 'red';
  }
});

window.addEventListener('load', () => {
  newLeagues.fetchLeague();
  CountLeagues();
});