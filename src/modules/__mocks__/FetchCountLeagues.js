const data = [
  {
    id: 1, name: 'league1', slug: 'leag1', abbr: 'lea1', logos: { dark: 'dark1.png', light: 'light1.png' },
  },
  {
    id: 2, name: 'league2', slug: 'leag2', abbr: 'lea2', logos: { dark: 'dark2.png', light: 'light2.png' },
  },
  {
    id: 3, name: 'league3', slug: 'leag3', abbr: 'lea3', logos: { dark: 'dark3.png', light: 'light3.png' },
  },
  {
    id: 4, name: 'league4', slug: 'leag4', abbr: 'lea4', logos: { dark: 'dark4.png', light: 'light4.png' },
  },
  {
    id: 5, name: 'league5', slug: 'leag5', abbr: 'lea5', logos: { dark: 'dark5.png', light: 'light5.png' },
  },
  {
    id: 6, name: 'league6', slug: 'leag6', abbr: 'lea6', logos: { dark: 'dark6.png', light: 'light6.png' },
  },
];
const fetchCountLeagues = () => Promise.resolve(data);
export default fetchCountLeagues;
