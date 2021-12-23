/* eslint-disable no-undef */
const answer = generateAnswer();
const maxAttempts = 5;
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

const addAttempt = () => {
  disablePreviousAttempt();

  addRow();

  $('.attempt .peg').click(function () {
    $(this).css('background-color', getNextColour(getPegColour($(this))));
  });

  $('.attempt .cluepegs').click(function () {
    const guess = getGuess();
    if (!guess.includes(undefined)) {
      if (attempts < maxAttempts) {
        addAttempt();
      } else {
        alert('Game Over ...');
      }
    }
  });

  attempts++;
};

$(() => {

  addAttempt();

});
