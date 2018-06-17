'use strict';

var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var titleName = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var typeName = ['palace', 'flat', 'house', 'bungalo'];
var checkinName = ['12:00', '13:00', '14:00'];
var checkoutName = ['12:00', '13:00', '14:00'];
var featuresName = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosName = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var createArray = function () {
  var array = [];

  var types = [];
  for (var j = 0; j < typeName.length; j++) {
    types[j] = typeName[j];
  }

  var checkin = [];
  for (var k = 0; j < checkinName.length; k++) {
    checkin[k] = checkinName[k];
  }

  var checkout = [];
  for (var w = 0; j < checkoutName.length; w++) {
    checkout[w] = checkoutName[w];
  }

  var feature = [];
  var min = 0;
  var max = 6;
  for (var a = 0; j < (Math.random() * (max - min) + min).length; a++) {
    feature[a] = featuresName[a];
  }

  for (var i = 0; i < 8; i++) {
    array[i] = {
      author: 'img/avatars/user0' + [i + 1] + '.png',

      offer: {
        title: titleName[i],
        price: Math.ceil(Math.random() * 1000),
        type: types,
        rooms: Math.ceil(Math.random() * 5),
        guests: Math.ceil(Math.random() * 5),
        checkin: checkin,
        checkout: checkout,
        features: feature,
        description: '',
        photos: photosName,
      },

      location: {
        x: (Math.random() * (900 - 300) + 300),
        y: (Math.random() * (630 - 130) + 130)
      }
    };
  }
  return array;
};

var infoArr = createArray();

// var mapDelete = document.querySelector('.map');
// mapDelete.classList.remove('map--faded');

var similarPointTemplate = document.querySelector('#map-card').content.querySelector('.map__card');
var pointTemplate = document.querySelector('#map-card').content.querySelector('.map__pin');
var fragment = document.createDocumentFragment();

var renderPoint = function (point) {
  var pointElement = similarPointTemplate.cloneNode(true);

  pointElement.querySelector('.popup__title').textContent = point.offer.title;
  pointElement.querySelector('.popup__text--address').textContent = point.offer.address;
  pointElement.querySelector('.popup__text--price').textContent = point.offer.price + '₽/ночь';

  if (point.offer.type === 'flat') {
    pointElement.querySelector('.popup__type').textContent = 'Квартира';
  } else if (point.offer.type === 'bungalo') {
    pointElement.querySelector('.popup__type').textContent = 'Бунгало';
  } else if (point.offer.type === 'house') {
    pointElement.querySelector('.popup__type').textContent = 'Дом';
  } else {
    pointElement.querySelector('.popup__type').textContent = 'Дворец';
  }


  if ((point.offer.rooms === 1) || (point.offer.guests === 1)) {
    pointElement.querySelector('.popup__text--capacity').textContent = point.offer.rooms + ' комната для ' + point.offer.guests + ' гостя';
  } else {
    pointElement.querySelector('.popup__text--capacity').textContent = point.offer.rooms + ' комнаты для ' + point.offer.guests + ' гостей';
  }

  pointElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + point.offer.checkin + ', ' + 'выезд до ' + point.offer.checkout;

  for (var i = 0; i < point.offer.features.length; i++) {
    var features = pointElement.querySelector('.popup__features');
    var feature = pointElement.querySelector('.popup__feature');
    feature.parentNode.removeChild(feature);
    feature = document.createElement('li');
    feature.classList.add('point.offer.features[i]');
    features.appendChild(feature);
  }

  pointElement.querySelector('.popup__description').textContent = point.offer.description;

  var photos = pointElement.querySelector('.popup__photos');
  var photo = pointElement.querySelector('.popup__photo');
  photo.src = point.offer.photos[0];
  for (i = 0; i <= point.offer.photos.length - 2; i++) {
    var photoNew = document.createElement('img');
    photoNew.classList.add('popup__photo');
    photoNew.width = '45';
    photoNew.height = '40';
    photoNew.alt = 'Фотография жилья';
    photoNew.src = point.offer.photos[i + 1];
    photos.appendChild(photoNew);
  }

  return pointElement;
};

var renderPin = function (point) {
  var pinElement = pointTemplate.cloneNode(true);

  pinElement.style = 'left: ' + (point.location.x - PIN_WIDTH / 2) + 'px; top: ' + (point.location.y - PIN_HEIGHT) + 'px';

  pinElement.querySelector('img').src = point.author;
  pinElement.querySelector('img').alt = point.alt;

  var inputAdress = document.querySelector('#address');
  inputAdress.placeholder = '' + Math.floor(point.location.x - PIN_WIDTH / 2) + ', ' + Math.floor(point.location.y - PIN_HEIGHT) + '';

  return pinElement;
};

for (var i = 0; i < infoArr.length; i++) {
  fragment.appendChild(renderPoint(infoArr[i]));
  fragment.appendChild(renderPin(infoArr[i]));
}

var pointList = document.querySelector('.map');
pointList.appendChild(fragment);

// var inputAdress = document.querySelector('#address');
// inputAdress.placeholder = '' + pinElement.style.left + ',' + pinElement.style.top + '';

var pin = document.querySelector('.map__pin--main');

var onPinClick = function () {
  var mapDelete = document.querySelector('.map');
  mapDelete.classList.remove('map--faded');

  var formDelete = document.querySelector('.ad-form');
  formDelete.classList.remove('ad-form--disabled');

  var allFieldset = document.querySelectorAll('#fieldset');
  for (i = 0; i < allFieldset.length; i++) {
    allFieldset[i].disabled = false;
  }

  var btnPin = document.querySelectorAll('.map__pin');
  for (i = 0; i < btnPin.length; i++) {
    btnPin[i].classList.remove('hidden');
  }
};

pin.addEventListener('mouseup', onPinClick);

var btnPinElement = document.querySelector('#button');

var articleCard = document.querySelectorAll('.map__card');
var articleCardElement;
for (i = 0; i < articleCard.length; i++) {
  articleCard[i].addEventListener('click', function (event) {
    articleCardElement = event.target;
  });
}

var onbtnPinElementClick = function () {
  articleCardElement.classList.remove('hidden');
};

btnPinElement.addEventListener('click', onbtnPinElementClick);

var btnClose = document.querySelector('.popup__close');
var onbtnCloseClick = function () {
  articleCardElement.classList.add('hidden');
};

btnClose.addEventListener('click', onbtnCloseClick);

var typeHouse = document.querySelector('#type');
var ontypeHouseClick = function () {
  var priceForHouse = document.querySelector('#price');
  for (i = 0; i < typeHouse.length; i++) {
    if (typeHouse[i].value === 'flat') {
      priceForHouse.min = '1000';
      priceForHouse.placeholder = '1000';
    } else if (typeHouse[i].value === 'bungalo') {
      priceForHouse.min = '0';
      priceForHouse.placeholder = '0';
    } else if (typeHouse[i].value === 'house') {
      priceForHouse.min = '5000';
      priceForHouse.placeholder = '5000';
    } else if (typeHouse[i].value === 'palace') {
      priceForHouse.min = '10000';
      priceForHouse.placeholder = '10000';
    }
  }
};

typeHouse.addEventListener('click', ontypeHouseClick);
