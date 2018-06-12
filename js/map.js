'use strict';

var infoArr = [
  {
    'author': 'img/avatars/user01.png',

    'offer': {
      'title': 'Уютное бунгало далеко от моря',
      'address': '678, 567',
      'price': 2000,
      'type': 'bungalo',
      'rooms': 2,
      'guests': 2,
      'checkin': '14:00',
      'checkout': '14:00',
      'features': ['wifi', 'dishwasher', 'conditioner'],
      'description': '',
      'photos': ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
    },

    'location': '400, 230'
  }
];

var mapDelete = document.querySelector('.map');
mapDelete.classList.remove('map--faded');

var similarPointTemplate = document.querySelector('#map-card').content.querySelector('.map__card');
var fragment = document.createDocumentFragment();

var renderPoint = function (point) {
  var pointElement = similarPointTemplate.cloneNode(true);

  pointElement.querySelector('.popup__text--address').textContent = point.location;
  pointElement.querySelector('.popup__avatar').textContent = point.author;
  pointElement.querySelector('.popup__title').textContent = point.alt;


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

  pointElement.querySelector('.popup__text--capacity').textContent = point.offer.rooms + ' комнаты для ' + point.offer.guests + ' гостей';
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
  for (i = 0; i <= point.offer.photos.length - 2; i++) {
    var photoNew = document.createElement('img');
    photoNew.classList.add('popup__photo');
    photoNew.width = '45';
    photoNew.height = '40';
    photos.appendChild(photoNew);
  }

  photo.src = point.offer.photos[0];
  for (i = 1; i < point.offer.photos.length; i++) {
    photoNew.src = point.offer.photos[i];
  }

  return pointElement;
};

for (var i = 0; i < infoArr.length; i++) {
  fragment.appendChild(renderPoint(infoArr[i]));
}

var pointList = document.querySelector('.map');
pointList.appendChild(fragment);
