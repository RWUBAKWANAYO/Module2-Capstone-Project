/**
 * @jest-environment jsdom
 */
import CountLeagues from './CountLeagues.js';

jest.mock('./FetchCountLeagues.js');
document.body.innerHTML = '<a href="#" class="soccer-count">Soccers</a>';
test('Should return array of llleagues', () => {
  CountLeagues().then((count) => {
    expect(count).toBe(6);
  });
  //   expect(CountLeagues()).toBe(6);
});
