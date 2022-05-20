import LeagueLikes from './LeagueLikes.js';
import { BaseUrl } from './credentials.js';

const newLeagueLikes = new LeagueLikes();
class Leagues {
  constructor(comment, like) {
    this.comment = comment;
    this.like = like;
  }

getLeagues=(data) => {
  const contentBody = document.querySelector('.content-body');
  contentBody.innerHTML = data.map((el) => `<div class="content-card" id=${el.id}>
    <div class="card-img-wrapper"><img src=${el.logos.light} alt="logo"/></div>
    <div class="card-description"><h4>${el.name}</h4><span class="card-likes"><i class="fa-regular fa-heart"></i><small class="likes-number" id=${el.id}>0 likes</small></span></div>
    <button class="comment-button" id="${el.id}">Comments</button>
    </div>
`).join('');
  return newLeagueLikes.fetchLikes();
}

fetchLeague = () => {
  fetch(BaseUrl).then((res) => res.json())
    .then((data) => this.getLeagues(data.data.slice(0, 6)));
}
}

export default Leagues;
