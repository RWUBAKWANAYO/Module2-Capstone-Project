import Leagues from './leagues.js';

const newLeagues = new Leagues();
const CountLeagues = () => {
  fetch(newLeagues.BaseUrl).then((res) => res.json())
    .then((data) => {
      const soccerCount = document.querySelector('.soccer-count');
      soccerCount.innerHTML = data.data.slice(0, 6).length;
    });
};

export default CountLeagues;