//define variables of two buttons
var $randomButtonClick = $('#random-button');
var $resetButtonClick = $('#reset-button');
var $layoutContainer = $('.layout-container');

$randomButtonClick.on('click', function() {
  $layoutContainer.css('background-color',randomBackgroundColor());
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hexArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function randomBackgroundColor() {
  R1 = hexArray[getRandomNumber(0,15)];
  R2 = hexArray[getRandomNumber(0,15)];
  G1 = hexArray[getRandomNumber(0,15)];
  G2 = hexArray[getRandomNumber(0,15)];
  B1 = hexArray[getRandomNumber(0,15)];
  B2 = hexArray[getRandomNumber(0,15)];

  return randomBackgroundValue = '#'+ R1 + R2 + G1 + G2 + B1 + B2;

}

//create randomizer
  //
  // assign 3 different numbers to randomize
  // #RR BB GG
  // concactenate string together

//append randomizer to button

//if white re-randomize
