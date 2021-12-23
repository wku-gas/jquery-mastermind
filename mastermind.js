const colours = ['aqua', 'red', 'yellow', 'green', 'blue', 'indigo'];
const getRandomColour = () => colours[Math.floor(Math.random() * colours.length)];
const generateAnswer = () => [getRandomColour(), getRandomColour(), getRandomColour(), getRandomColour()];
const checkAnswers = (guess, answer) => {
  let blacks = 0, whites = 0;

  for (let i = 0; i < 4; i++) {
    if (answer[i] === guess[i]) {
      blacks++;
      answer[i] = null;
      guess[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    const a = answer[i];
    if (a && guess.includes(a)) {
      whites++;
    }
  }

  return [blacks, whites];
};
const getNextColour = existingColour => colours[(colours.indexOf(existingColour) + 1) % colours.length];


// export for unit testing only
if (typeof module !== 'undefined') {
  module.exports = {
    colours, getRandomColour, generateAnswer, checkAnswers, getNextColour
  };
}
