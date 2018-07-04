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
  var mapFilter = document.querySelector('.map__filter');

  function filterHouseType(point) {
    var typeHouseElement = document.querySelector('#housing-type');
    switch (typeHouseElement.value) {
      case 'any':
        return point;
      default:
        return point.offer.type;
    }
  };

  function filterPrice (point) {
    var priceElement = document.querySelector('#housing-price');
    switch (priceElement.value) {
      case 'any':
        return point;
      case 'low':
        return point.offer.price <= MIN_FILTER_PRICE;
      case 'middle':
        return (point.offer.price >= MIN_FILTER_PRICE) && (point.offer.price >= MAX_FILTER_PRICE);
      case 'hight':
        return point.offer.price <= MAX_FILTER_PRICE;
      default:
        return point.offer.price = priceElement.value;
    }
  };

  function filterRooms (point) {
    var roomsElement = document.querySelector('#housing-rooms');
    switch (roomsElement.value) {
      case 'any':
        return point;
      default:
        return point.offer.rooms = parseInt(roomsElement.value, 10);
    }
  };

  function filterGuests (point) {
    var guestsElement = document.querySelector('#housing-guests');
    switch (guestsElement.value) {
      case 'any':
        return point;
      default:
        return point.offer.guests = parseInt(roomsElement.value, 10);
    }
  };

  function filterFeatures (point) {
    var featuresElement = document.querySelector('#housing-features');
    for (var i = 0; i < featuresElement.length; i++) {
      if (featuresElement[i].checked && point.offer.features.indexOf(featuresElement[i].value) < 0) {
        return false;
      }
    }
    return true;
  };

  function deletePin () {
    var pin = document.querySelectorAll('.map__pin');

    for (i = 0; i < pin.length; i++) {
      document.removeChild(pin[i]);
    }
  };

  function filterPin() {
    newPins = window.sortedCards;
    var filteredPins = newPins.filter(filterHouseType).filter(filterPrice).filter(filterRooms).filter(filterGuests).filter(filterFeatures);

    deletePin();
    window.renderPin(filteredPins);

  }

  var onFilterChange = function () {
    window.debounce(filterPin, window.debounce.DEBOUNCE_INTERVAL);
  };



  mapFilter.addEventListener('change', onFilterChange);


})();
