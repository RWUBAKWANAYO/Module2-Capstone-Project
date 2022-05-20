import { BaseUrl } from './credentials.js';

const fetchCountLeagues = () => fetch(BaseUrl).then((res) => res.json())
  .then((data) => data.data.slice(0, 6));
export default fetchCountLeagues;