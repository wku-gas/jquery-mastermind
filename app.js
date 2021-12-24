/* eslint-disable no-undef */
const maxAttempts = 6;

let answer;
let attempts = 0;

const getPegColour = $peg => {
  const colour = $.Color($peg, 'background-color');

  return getColourName(colour);
};

const getColourName = colour => {
  return colour ? colours.filter(c => $.Color(colour).is(c))[0] : undefined;
};

const getGuess = () => {
  return $('.attempt .peg').toArray().map(p => getColourName(p.style?.backgroundColor));
};

const addRow = () => {
  $('.board').append(`
  <div class="row attempt">
      <div class="pegs">
        <div class="peg"></div>
        <div class="peg"></div>
        <div class="peg"></div>
        <div class="peg"></div>
      </div>
      <div class="cluepegs">
        <div class="cluepeg"></div>
        <div class="cluepeg"></div>
        <div class="cluepeg"></div>
        <div class="cluepeg"></div>
      </div>
    </div>
  `);
};

const disablePreviousAttempt = () => {
  $('.attempt .peg').off('click');
  $('.attempt .cluepegs').off('click');

  $('.attempt').removeClass('attempt');
};

const setCluePegs = ([blacks, whites]) => {
  const cluePegs = $('.attempt .cluepeg').toArray();
  let n = 0;
  for (let i = 0; i < blacks; i++) {
    cluePegs[i].style.backgroundColor = 'black';
    n++;
  }
  for (let i = 0; i < whites; i++) {
    cluePegs[i + n].style.backgroundColor = 'white';
  }
};

function changePegColourOnClick() {
  $(this).css('background-color', getNextColour(getPegColour($(this))));
}

const winGame = ([blacks]) => blacks === 4;

const submitGuess = () => {
  const guess = getGuess();
  if (!guess.includes(undefined)) {
    const clues = checkAnswer(guess, answer);
    setCluePegs(clues);

    if (winGame(clues)) {
      alert('You win!!!');
    } else if (attempts < maxAttempts) {
      addAttempt();
    } else {
      alert('Game Over ...');
    }
  }
};

const addAttempt = () => {
  disablePreviousAttempt();

  addRow();

  $('.attempt .peg').click(changePegColourOnClick);

  $('.attempt .cluepegs').click(submitGuess);

  attempts++;
};

const startGame = () => {
  answer = generateAnswer();
  addAttempt();
};

$(() => {

  startGame();

});
