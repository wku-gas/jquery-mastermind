let answer = generateAnswer()

const getPegColour = $peg => {
  $colour = $.Color($peg, 'background-color')
  return colours.filter(c => $.Color($colour).is(c))[0]
}

$(() => {
  $('.peg').click(function () {
    $(this).css('background-color', getNextColour(getPegColour($(this))))
  })

});
