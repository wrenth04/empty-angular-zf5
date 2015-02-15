'use strict';

/**
 * @ngdoc function
 * @name shoait01App.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the shoait01App
 */
angular.module('shoait01App')
  .controller('ShopCtrl', function ($scope) {
    $scope.shops = [
      'yc',
      'wei',
      'derek'
    ];
  });
