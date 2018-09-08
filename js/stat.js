'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 90;
var TEXTX = 150;
var TEXTYFIRST = 30;
var TEXTTIMES = 270;
var TEXTNAMES = 80;
var RECTX = 190;
var RECTY = 250;
var RECT_WIDTH = -40;
var RECT_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr !== []) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return max;
};
var getGistogram = function (ctx, names, times) {
  var bestplayer = getMaxElement(times);
  for (var n = 0; n < times.length; n++) {
    if (names[n] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ' )';
    }
    ctx.fillRect(RECTX + n * GAP, RECTY, RECT_WIDTH, -((RECT_HEIGHT) * times[n]) / bestplayer);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.round(times[n]), TEXTX + n * GAP, TEXTTIMES);
    ctx.fillText(names[n], TEXTX + n * GAP, TEXTNAMES);
  }
};

var getText = function (ctx, word) {
  var textgap = 0;
  for (var n = 0; n < word.length; n++) {

    ctx.fillText(word[n], TEXTX, TEXTYFIRST + textgap);
    textgap += 30;
  }
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  getGistogram(ctx, names, times);
  var words = ['Ура вы победили!', 'Список результатов:'];
  getText(ctx, words);
};
