/**
 * @jest-environment jsdom
 */
import CountLeagues from './CountLeagues.js';

jest.mock('./FetchCountLeagues.js');
document.body.innerHTML = '<a href="#" class="soccer-count">Soccers</a>';
describe('Count Leagues should return', () => {
  test('number', () => {
    CountLeagues().then((count) => {
      expect(typeof count).toBe('number');
    });
  });
  test('length of array which is equal to six', () => {
    CountLeagues().then((count) => {
      expect(count).toBe(6);
    });
  });
});
