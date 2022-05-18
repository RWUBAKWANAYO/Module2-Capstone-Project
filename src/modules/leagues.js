import LeagueLikes from './LeagueLikes.js';

const newLeagueLikes = new LeagueLikes();
class Leagues {
  constructor(comment, like) {
    this.comment = comment;
    this.like = like;
  }

leagueData = [];

BaseUrl = 'https://api-football-standings.azharimm.site/leagues';

InvolvementBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

getLeagues=(data) => {
  const contentBody = document.querySelector('.content-body');
  contentBody.innerHTML = data.map((el) => `<div class="content-card" id=${el.id}>
    <div class="card-img-wrapper"><img src=${el.logos.light} alt="logo"/></div>
<<<<<<< HEAD
    <div class="card-description"><h4>${el.name}</h4><span class="card-likes"><i class="fa-regular fa-heart"></i><small>5 likes</small></span></div>
    <button class="comment-button" id="${el.id}">Comments</button>
=======
    <div class="card-description"><h4>${el.name}</h4><span class="card-likes"><i class="fa-regular fa-heart"></i><small class="likes-number" id=${el.id}>0 likes</small></span></div>
    <button class="comment-button">Comments</button>
>>>>>>> dev
    </div>
`).join('');
  return newLeagueLikes.fetchLikes();
}

fetchLeague = () => {
  fetch(this.BaseUrl).then((res) => res.json())
    .then((data) => this.getLeagues(data.data.slice(0, 6)));
}

postAppId = () => {
  fetch(`${this.InvolvementBaseUrl}/apps`, { method: 'POST' }).then((res) => res.text())
    .then((appId) => localStorage.setItem('app_id', JSON.stringify(appId)));
}
}

export default Leagues;
