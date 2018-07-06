'use strict';

(function () {
  // var mapFilter = document.querySelector('.map__filter');

  // var mapTypeHouse = document.querySelector('#housing-type');
  // var onmapTypeHouseClick = function (e) {
  //   var typeHouse = e.target.value;
  //   console.log(typeHouse);
  // };

  // mapTypeHouse.addEventListener('change', onmapTypeHouseClick);

  var MIN_FILTER_PRICE = 10000;
  var MAX_FILTER_PRICE = 50000;

  var newPins = [];
  var mapFilters = document.querySelector('.map__filters');
  var pinsContainer = document.querySelector('.map__pins');

  function filterHouseType(point) {
    var typeHouseElement = document.querySelector('#housing-type');
    switch (typeHouseElement.value) {
      case 'any':
        return point;
      default:
        return point.offer.type === typeHouseElement.value;
    }
  }

  function filterPrice(point) {
    var priceElement = document.querySelector('#housing-price');
    switch (priceElement.value) {
      case 'any':
        return point;
      case 'low':
        return point.offer.price < MIN_FILTER_PRICE;
      case 'middle':
        return (point.offer.price >= MIN_FILTER_PRICE) && (point.offer.price <= MAX_FILTER_PRICE);
      case 'high':
        return point.offer.price > MAX_FILTER_PRICE;
      default:
        return point.offer.price === priceElement.value;
    }
  }
  var roomsElement = document.querySelector('#housing-rooms');
  function filterRooms(point) {
    // var roomsElement = document.querySelector('#housing-rooms');
    switch (roomsElement.value) {
      case 'any':
        return point;
      default:
        return point.offer.rooms === parseInt(roomsElement.value, 10);
    }
  }

  function filterGuests(point) {
    var guestsElement = document.querySelector('#housing-guests');
    switch (guestsElement.value) {
      case 'any':
        return point;
      default:
        return point.offer.guests === parseInt(guestsElement.value, 10);
    }
  }

  function filterFeatures(point) {
    var featuresElement = document.querySelectorAll('#housing-features .map__checkbox');
    for (var i = 0; i < featuresElement.length; i++) {
      if (featuresElement[i].checked && (point.offer.features.indexOf(featuresElement[i].value) < 0)) {
        return false;
      }
    }
    return true;
    // return point.offer.features === featuresElement.value;
  }

  function deletePin() {
    var pins = document.querySelectorAll('.map__pin');
    var cards = document.querySelectorAll('.map__card');

    for (var i = 1; i < pins.length; i++) {
      pinsContainer.removeChild(cards[i - 1]);
      pinsContainer.removeChild(pins[i]);
    }
  }

  function filterPin() {
    var fragment = document.createDocumentFragment();
    newPins = window.sortedCards;
    var filteredPins = newPins.filter(filterHouseType);
    filteredPins = filteredPins.filter(filterPrice);
    filteredPins = filteredPins.filter(filterHouseType).filter(filterRooms).filter(filterGuests).filter(filterFeatures);

    deletePin();
    var length = 5;
    if (filteredPins.length < 5) {
      length = filteredPins.length;
    }
    for (var i = 0; i < length; i++) {
      fragment.appendChild(window.renderCard(filteredPins[i]));
      fragment.appendChild(window.renderPin(filteredPins[i], true));
    }

    pinsContainer.appendChild(fragment);

  }

  var onFilterChange = function () {
    window.debounce(filterPin, window.debounce.DEBOUNCE_INTERVAL);
  };


  mapFilters.addEventListener('change', onFilterChange);


})();
