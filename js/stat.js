'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var Gap = 90;
var TextX = 150;
var TextY = 30;
var RectX = 190;
var RectY = 250;
var RECT_WIDTH = 420;
var RECT_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr === []) {
    return 0;
  } else {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    max = Math.round(max);
    return max;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  for (var n = 0; n < times.length; n++) {
    if (names[n] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var color = Math.random();
      ctx.fillStyle = 'rgba(0, 0, 255,' + color + ' )';
    }
    var bestplayer = getMaxElement(times);
    ctx.fillRect(RectX + n * Gap, RectY, RECT_WIDTH - 460, -((RECT_HEIGHT - 120) * times[n]) / bestplayer);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.round(times[n]), TextX + n * Gap, TextY + 240);
    ctx.fillText('Ура вы победили!', TextX, TextY);
    ctx.fillText('Список результатов:', TextX, TextY + 20);
    ctx.fillText(names[n], TextX + n * Gap, TextY + 50);

  }
};
