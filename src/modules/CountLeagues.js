import fetchCountLeagues from './FetchCountLeagues.js';

const CountLeagues = () => fetchCountLeagues().then((data) => {
  const soccerCount = document.querySelector('.soccer-count');
  soccerCount.innerHTML = data.length;
  return data.length;
});

export default CountLeagues;