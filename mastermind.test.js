/* eslint-disable no-undef */
const { colours, getRandomColour, generateAnswer, checkAnswer, getNextColour } = require('./mastermind.js');

test('#colours', () => {
  expect(colours.length).toBe(6);
  expect(colours).toEqual(['aqua', 'red', 'yellow', 'green', 'blue', 'indigo']);
});

test('#getRandomColour', () => {
  expect(colours.includes(getRandomColour())).toBe(true);
});

test('#generateAnswer', () => {
  expect(Array.isArray(generateAnswer())).toBe(true);
  expect(generateAnswer().length).toBe(4);
});

test('#checkAnswer', () => {
  expect(checkAnswer(['red', 'blue', 'green', 'yellow'], ['red', 'blue', 'green', 'yellow'])).toEqual([4, 0]);
  expect(checkAnswer(['red', 'blue', 'green', 'yellow'], ['red', 'blue', 'green', 'red'])).toEqual([3, 0]);
  expect(checkAnswer(['red', 'red', 'red', 'blue'], ['red', 'red', 'blue', 'blue'])).toEqual([3, 0]);
  expect(checkAnswer(['red', 'red', 'red', 'red'], ['red', 'red', 'red', 'red'])).toEqual([4, 0]);
});

test('#getNextColour', () => {
  expect(getNextColour()).toBe('aqua');
  expect(getNextColour('aqua')).toBe('red');
  expect(getNextColour('red')).toBe('yellow');
  expect(getNextColour('yellow')).toBe('green');
  expect(getNextColour('green')).toBe('blue');
  expect(getNextColour('blue')).toBe('indigo');
  expect(getNextColour('indigo')).toBe('aqua');
});