const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const getRandomColour = () => colours[Math.floor(Math.random() * colours.length)];
const generateAnswer = () => [getRandomColour(), getRandomColour(), getRandomColour(), getRandomColour()];
const checkAnswers = (guess, answer) => {
  let blacks = 0, whites = 0;

  for (let i = 0; i < 4; i++) {
    const a = answer[i];
    if (a === guess[i]) {
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
}

$(() => {
  console.log(checkAnswers(['red', 'red', 'red', 'blue'], ['red', 'red', 'blue', 'blue']))
});
