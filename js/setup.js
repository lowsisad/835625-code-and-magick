'use strict';

var wizardFirstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorOfCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


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

var wizard = [];
for (var i = 0; i < 4; i++) {
  var newArr = getWizard();
  wizard.push(newArr);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorOfEyes;

  return wizardElement;
};


var fragment = document.createDocumentFragment();

for (i = 0; i < wizard.length; i++) {

  fragment.appendChild(renderWizard(wizard[i]));
}
similarListElement.appendChild(fragment);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
