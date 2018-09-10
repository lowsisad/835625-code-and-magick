'use strict';

var wizardFirstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorOfCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: wizardFirstName[Math.floor(Math.random() * (wizardFirstName.length))] + ' ' + wizardSecondName[Math.floor(Math.random() * (wizardSecondName.length))],
    coatColor: colorOfCoat[Math.floor(Math.random() * (colorOfCoat.length))],
    colorOfEyes: eyesColor[Math.floor(Math.random() * (eyesColor.length))]
  },
  {
    name: wizardFirstName[Math.floor(Math.random() * (wizardFirstName.length))] + ' ' + wizardSecondName[Math.floor(Math.random() * (wizardSecondName.length))],
    coatColor: colorOfCoat[Math.floor(Math.random() * (colorOfCoat.length))],
    colorOfEyes: eyesColor[Math.floor(Math.random() * (eyesColor.length))]
  },
  {
    name: wizardFirstName[Math.floor(Math.random() * (wizardFirstName.length))] + ' ' + wizardSecondName[Math.floor(Math.random() * (wizardSecondName.length))],
    coatColor: colorOfCoat[Math.floor(Math.random() * (colorOfCoat.length))],
    colorOfEyes: eyesColor[Math.floor(Math.random() * (eyesColor.length))]
  },
  {
    name: wizardFirstName[Math.floor(Math.random() * (wizardFirstName.length))] + ' ' + wizardSecondName[Math.floor(Math.random() * (wizardSecondName.length))],
    coatColor: colorOfCoat[Math.floor(Math.random() * (colorOfCoat.length))],
    colorOfEyes: eyesColor[Math.floor(Math.random() * (eyesColor.length))]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorOfEyes;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
