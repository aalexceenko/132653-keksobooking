'use strict';

var infoArr = [
  {
    'author': 'img/avatars/user01.png',

    'offer': {
      'title': 'Уютное бунгало далеко от моря',
      'address': 'location.x, location.y',
      'price': 2000,
      'type': 'bungalo',
      'rooms': 2,
      'guests': 1,
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

  var pointList = document.querySelector('.map');
  pointList.appendChild(fragment);

  pointElement.querySelector('.popup__title').textContent = point.offer.title;
  pointElement.querySelector('.popup__text--address').textContent = point.offer.address;
  pointElement.querySelector('.popup__text--price').textContent = point.offer.price + '/ночь';


  return pointElement;
};

for (var i = 0; i < infoArr.length; i++) {
  fragment.appendChild(renderPoint(infoArr[i]));
}

