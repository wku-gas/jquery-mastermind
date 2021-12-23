let answer = generateAnswer()

const getPegColour = $peg => {
  const colour = $.Color($peg, 'background-color')

  return getColourName(colour)
}

const getColourName = colour => {
  return colour ? colours.filter(c => $.Color(colour).is(c))[0] : undefined
}

const getGuess = () => {
  return $('.peg').toArray().map(p => getColourName(p.style?.backgroundColor))
}

$(() => {
  $('.peg').click(function () {
    $(this).css('background-color', getNextColour(getPegColour($(this))))
  })


});
