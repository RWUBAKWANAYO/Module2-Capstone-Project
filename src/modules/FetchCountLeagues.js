import Leagues from './leagues.js';

const newLeagues = new Leagues();
const fetchCountLeagues = () => fetch(newLeagues.BaseUrl).then((res) => res.json())
  .then((data) => data.data.slice(0, 6));
export default fetchCountLeagues;