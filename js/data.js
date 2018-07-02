'use strict';

// (function () {
// // создаем данные

//   var titleName = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
//   var typeName = ['palace', 'flat', 'house', 'bungalo'];
//   var checkinName = ['12:00', '13:00', '14:00'];
//   var checkoutName = ['12:00', '13:00', '14:00'];
//   var featuresName = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
//   var photosName = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

//   var createArray = function () {
//     var array = [];

//     var types = [];
//     for (var j = 0; j < typeName.length; j++) {
//       types[j] = typeName[j];
//     }

//     var checkin = [];
//     for (var k = 0; j < checkinName.length; k++) {
//       checkin[k] = checkinName[k];
//     }

//     var checkout = [];
//     for (var w = 0; j < checkoutName.length; w++) {
//       checkout[w] = checkoutName[w];
//     }

//     var feature = [];
//     var min = 0;
//     var max = 6;
//     for (var a = 0; j < (Math.random() * (max - min) + min).length; a++) {
//       feature[a] = featuresName[a];
//     }

//     for (var i = 0; i < 8; i++) {
//       array[i] = {
//         author: 'img/avatars/user0' + [i + 1] + '.png',

//         offer: {
//           title: titleName[i],
//           price: Math.ceil(Math.random() * 1000),
//           type: types,
//           rooms: Math.ceil(Math.random() * 5),
//           guests: Math.ceil(Math.random() * 5),
//           checkin: checkin,
//           checkout: checkout,
//           features: feature,
//           description: '',
//           photos: photosName,
//         },

//         location: {
//           x: (Math.random() * (900 - 300) + 300),
//           y: (Math.random() * (630 - 130) + 130)
//         }
//       };
//     }
//     return array;
//   };

//   window.infoArr = createArray();
// })();
