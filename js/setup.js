'use strict';

var ESC = 27;
var ENTER = 13;
var numberOfWizards = 4;
var wizardFirstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorOfCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getElement = function (someElement) {
  var random = someElement[Math.floor(Math.random() * (someElement.length))];
  return random;
};

var getWizard = function () {
  var newWizard = {
    name: getElement(wizardFirstName) + ' ' + getElement(wizardSecondName),
    coatColor: getElement(colorOfCoat),
    colorOfEyes: getElement(eyesColor)
  };
  return newWizard;
};

var wizards = [];
for (var i = 0; i < numberOfWizards; i++) {
  var newArr = getWizard();
  wizards.push(newArr);
}

var renderWizard = function (protoWizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = protoWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = protoWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = protoWizard.colorOfEyes;

  return wizardElement;
};


var fragment = document.createDocumentFragment();

for (i = 0; i < wizards.length; i++) {

  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var colorCoat = document.querySelector('.setup-wizard .wizard-coat');
var colorEye = document.querySelector('.setup-wizard .wizard-eyes');
var colorFireball = document.querySelector('.setup-fireball-wrap');

var clicksMyFireball = 0;
colorFireball.addEventListener('click', function () {
  clicksMyFireball = clicksMyFireball + 1;
  if (clicksMyFireball === 5) {
    clicksMyFireball = 0;
  }
  colorFireball.style.background = fireballColor[clicksMyFireball];
});


var clicksMyEye = 0;
colorEye.addEventListener('click', function () {
  clicksMyEye = clicksMyEye + 1;
  if (clicksMyEye === 5) {
    clicksMyEye = 0;
  }
  colorEye.style = 'fill:' + eyesColor[clicksMyEye];
});

var clickMyCoat = 0;

colorCoat.addEventListener('click', function () {
  clickMyCoat = clickMyCoat + 1;
  if (clickMyCoat === 6) {
    clickMyCoat = 0;
  }
  colorCoat.style = 'fill:' + colorOfCoat[clickMyCoat];
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.querySelector('.setup').style = '';
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    closePopup();
  }
});
