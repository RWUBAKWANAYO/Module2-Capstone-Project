/**
 * @jest-environment jsdom
 */

import displayCom from './countComments.js';

document.body.innerHTML = '<div class="comment-counter"></div>';

test('5', () => {
  expect(displayCom([{}, {}, {}, {}, {}])).toBe(5);
});

test('0', () => {
  expect(displayCom([])).toBe(0);
});

test('2', () => {
  expect(displayCom(['1', '2'])).toBe(2);
});