'use strict';

(function () {
  // рендер метки
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var pointTemplate = document.querySelector('#map-card').content.querySelector('.map__pin');

  window.renderPin = function (point) {

    var pinElement = pointTemplate.cloneNode(true);

    pinElement.style = 'left: ' + (point.location.x - PIN_WIDTH / 2) + 'px; top: ' + (point.location.y - PIN_HEIGHT) + 'px';

    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;

    var inputAdress = document.querySelector('#address');
    inputAdress.placeholder = '' + Math.floor(point.location.x - PIN_WIDTH / 2) + ', ' + Math.floor(point.location.y - PIN_HEIGHT) + '';

    return pinElement;
  };

  // при клике на пин разблокируется форма
  var pin = document.querySelector('.map__pin--main');
  var onPinClick = function () {
    var mapDelete = document.querySelector('.map');
    mapDelete.classList.remove('map--faded');

    var formDelete = document.querySelector('.ad-form');
    formDelete.classList.remove('ad-form--disabled');

    var allFieldset = document.querySelectorAll('#fieldset');
    for (var i = 0; i < allFieldset.length; i++) {
      allFieldset[i].disabled = false;
    }

    var btnPin = document.querySelectorAll('.map__pin');
    for (i = 0; i < btnPin.length; i++) {
      btnPin[i].classList.remove('hidden');
    }
  };

  pin.addEventListener('mouseup', onPinClick);
})();
