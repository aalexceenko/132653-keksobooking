'use strict';

(function () {

// передвижение метки
  var pinHandle = document.querySelector('.map__pin--main');
  pinHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCordinate = {
      x: evt.clientX,
      y: evt.clientY
    };

    var MouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCordinate.x - moveEvt.clientX,
        y: startCordinate.y - moveEvt.clientY
      };

      startCordinate = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      pinHandle.style.top = (pinHandle.offsetTop - shift.y) + 'px';
      pinHandle.style.left = (pinHandle.offsetLeft - shift.x) + 'px';
    };

    var MouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      pinHandle.removeEventListener('mousemove', MouseMoveHandler);
      pinHandle.removeEventListener('mouseup', MouseUpHandler);
    };

    pinHandle.addEventListener('mousemove', MouseMoveHandler);
    pinHandle.addEventListener('mouseup', MouseUpHandler);
  });
})();

