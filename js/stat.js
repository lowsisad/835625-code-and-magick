'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);

  var max = 0;
  for (var i = 0; i < times.length; i++) {
    if (max < times[i]) {
      max = times[i];
    }
  }
  max = Math.round(max);
  for (var n = 0; n < times.length; n++) {
    if (names[n] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var color = Math.random();
      ctx.fillStyle = 'rgba(0, 0, 255,' + color + ' )';
    }

    ctx.fillText(names[n], 150 + n * 90, 80);

    ctx.fillRect(190 + n * 90, 250, -40, -(150 * times[n]) / max);
    ctx.fillText(Math.round(times[n]), 150 + n * 90, 270);
  }
};
