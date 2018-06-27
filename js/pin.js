'use strict';

(function () {
// рендер метки
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var pointTemplate = document.querySelector('#map-card').content.querySelector('.map__pin');
// var fragment = document.createDocumentFragment();

var renderPin = function (point) {
  var pinElement = pointTemplate.cloneNode(true);

  pinElement.style = 'left: ' + (point.location.x - PIN_WIDTH / 2) + 'px; top: ' + (point.location.y - PIN_HEIGHT) + 'px';

  pinElement.querySelector('img').src = point.author;
  pinElement.querySelector('img').alt = point.alt;

  var inputAdress = document.querySelector('#address');
  inputAdress.placeholder = '' + Math.floor(point.location.x - PIN_WIDTH / 2) + ', ' + Math.floor(point.location.y - PIN_HEIGHT) + '';

  return pinElement;
};



// for (var i = 0; i < infoArr.length; i++) {
//   fragment.appendChild(renderPoint(infoArr[i]));
//   fragment.appendChild(renderPin(infoArr[i]));
// }
// var pointList = document.querySelector('.map');
// pointList.appendChild(fragment);

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
  for (var i = 0; i < btnPin.length; i++) {
    btnPin[i].classList.remove('hidden');
  }
};

pin.addEventListener('mouseup', onPinClick);
})();