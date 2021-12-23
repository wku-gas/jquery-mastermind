const colours = ['aqua', 'red', 'yellow', 'green', 'blue', 'indigo'];
const getRandomColour = () => colours[Math.floor(Math.random() * colours.length)];
const generateAnswer = () => [getRandomColour(), getRandomColour(), getRandomColour(), getRandomColour()];
const checkAnswer = (guess, answer) => {
  const guessCopy = guess.slice();
  const answerCopy = answer.slice();
  let blacks = 0, whites = 0;

  for (let i = 0; i < 4; i++) {
    if (answerCopy[i] === guessCopy[i]) {
      blacks++;
      answerCopy[i] = null;
      guessCopy[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    const a = answerCopy[i];
    if (a && guessCopy.includes(a)) {
      whites++;
    }
  }

  return [blacks, whites];
};
const getNextColour = existingColour => colours[(colours.indexOf(existingColour) + 1) % colours.length];


// export for unit testing only
if (typeof module !== 'undefined') {
  module.exports = {
    colours, getRandomColour, generateAnswer, checkAnswer, getNextColour
  };
}
