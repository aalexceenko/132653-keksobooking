'use strict';

(function () {
  // var mapFilter = document.querySelector('.map__filter');

  var mapTypeHouse = document.querySelector('#housing-type');
  var onmapTypeHouseClick = function (e) {
    var typeHouse = e.target.value;
    console.log(typeHouse);
  };

  mapTypeHouse.addEventListener('change', onmapTypeHouseClick);

  
})();
