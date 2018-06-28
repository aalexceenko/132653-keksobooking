'use strict';
// создаем карточки

(function () {
  var similarPointTemplate = document.querySelector('#map-card').content.querySelector('.map__card');



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

  // for (var i = 0; i < window.infoArr.length; i++) {
  //   fragment.appendChild(renderPoint(window.infoArr[i]));
  //   fragment.appendChild(window.renderPin(window.infoArr[i]));
  // }
  // var pointList = document.querySelector('.map');
  // pointList.appendChild(fragment);
  
  window.load(function(card) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.infoArr.length; i++) {
      fragment.appendChild(renderPoint(window.infoArr[i]));
      fragment.appendChild(window.renderPin(window.infoArr[i]));
    }
    var pointList = document.querySelector('.map');
    pointList.appendChild(fragment);
  });


  // открытие и зактрытие карточки
  var openedBlock;
  var btnPinElement = document.querySelector('.map');
  var onbtnPinElementClick = function (e) {
    var button = e.target.parentElement;
    if (button.classList.contains('map__pin')) {
      var card = button.previousSibling;
      if (openedBlock) {
        openedBlock.classList.add('hidden');
      }
      card.classList.remove('hidden');
      openedBlock = card;
    }
  };
  var articleCard = document.querySelector('.map');
  var onarticleCardClick = function (e) {
    var button = e.target;
    if (button.classList.contains('popup__close')) {
      var cardElement = button.parentNode;
      cardElement.classList.add('hidden');
    }
  };

  btnPinElement.addEventListener('click', onbtnPinElementClick);
  articleCard.addEventListener('click', onarticleCardClick);
})();
