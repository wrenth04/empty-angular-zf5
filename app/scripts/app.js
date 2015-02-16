'use strict';

/**
 * @ngdoc overview
 * @name shoait01App
 * @description
 * # shoait01App
 *
 * Main module of the application.
 */
angular
  .module('shoait01App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope, $timeout) {
    function updateFoundation() {
      $(document).foundation({ offcanvas: { open_method: 'move', close_on_click: false } });
    };

    $rootScope.$on('$routeChangeSuccess', function () {
      updateFoundation();
    });

    $timeout(function () {
      updateFoundation();
    }, 500);
  });
