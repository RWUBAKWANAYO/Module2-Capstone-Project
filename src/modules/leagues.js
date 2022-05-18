class Leagues {
  constructor(comment, like) {
    this.comment = comment;
    this.like = like;
  }

leagueData = [];

BaseUrl = 'https://api-football-standings.azharimm.site/leagues';

externalBaseUrl = '';

getLeagues=(data) => {
  const contentBody = document.querySelector('.content-body');
  contentBody.innerHTML = data.map((el) => `<div class="content-card">
    <div class="card-img-wrapper"><img src=${el.logos.light} alt="logo"/></div>
    <div class="card-description"><h4>${el.name}</h4><span class="card-likes"><i class="fa-regular fa-heart"></i><small>5 likes</small></span></div>
    <button class="comment-button" id="${el.id}">Comments</button>
    </div>
`).join('');
}

fetchLeague = () => {
  fetch(this.BaseUrl).then((res) => res.json())
    .then((data) => this.getLeagues(data.data.slice(0, 6)));
}

getDetail = (item) => {
  const popUp = document.querySelector('.pop-up-window');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  popUp.style.display = 'flex';
  popUp.innerHTML = `<div class="pop-up"><div id="close">&times</div>
    <div class="pop-up-img"><img src=${item.logos.light} alt="logo"/></div>
    <div class="card-description"><h1>${item.name}</h1></div>
    <div class="details"><p><b>slug: </b>${item.slug}</p><p><b>abbr: </b>${item.abbr}</p></div>
    </div>
`;
  const btn = document.querySelector('#close');
  btn.onclick = () => {
    popUp.style.display = 'none';
    body.style.overflow = 'scroll';
  };
}
}

document.onclick = (e) => {
  if (e.target.className === 'comment-button') {
    const btnId = e.target.id;
    const league = new Leagues();
    fetch(league.BaseUrl).then((res) => res.json())
      .then((data) => {
        data.data.forEach((item) => {
          if (item.id === btnId) {
            league.getDetail(item);
          }
        });
      });
  }
};

export default Leagues;
