/* eslint-disable no-undef */
const { colours, getRandomColour, generateAnswer, checkAnswers } = require('./mastermind.js')

test('#colours', () => {
  expect(colours.length).toBe(7);
  expect(colours).toEqual(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
});

test('#getRandomColour', () => {
  expect(colours.includes(getRandomColour())).toBe(true);
});

test('#generateAnswer', () => {
  expect(Array.isArray(generateAnswer())).toBe(true);
  expect(generateAnswer().length).toBe(4);
});

test('#checkAnswers', () => {
  expect(checkAnswers(['red', 'blue', 'green', 'yellow'], ['red', 'blue', 'green', 'yellow'])).toEqual([4, 0]);
  expect(checkAnswers(['red', 'blue', 'green', 'yellow'], ['red', 'blue', 'green', 'red'])).toEqual([3, 0]);
  expect(checkAnswers(['red', 'red', 'red', 'blue'], ['red', 'red', 'blue', 'blue'])).toEqual([3, 0]);
  expect(checkAnswers(['red', 'red', 'red', 'red'], ['red', 'red', 'red', 'red'])).toEqual([4, 0]);
});
