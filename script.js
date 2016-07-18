//define variables of two buttons
var $randomButtonClick = $('#random-button');
var $resetButtonClick = $('#reset-button');
var $layoutContainer = $('.layout-container');
var hexArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

$randomButtonClick.on('click', function() {
  $layoutContainer.css('background-color',randomBackgroundColor());
});

$resetButtonClick.on('click', function() {
  $layoutContainer.css('background-color', '#FFFFFF');
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomGeneratedHex() {
  R1 = hexArray[getRandomNumber(0,15)];
  R2 = hexArray[getRandomNumber(0,15)];
  G1 = hexArray[getRandomNumber(0,15)];
  G2 = hexArray[getRandomNumber(0,15)];
  B1 = hexArray[getRandomNumber(0,15)];
  B2 = hexArray[getRandomNumber(0,15)];
   return '#' + R1 + R2 + G1 + G2 + B1 + B2;
}

function randomBackgroundColor() {
  var color = randomGeneratedHex();
  if (color !== "#FFFFFF") { return color; }
  randomGeneratedHex();
}
