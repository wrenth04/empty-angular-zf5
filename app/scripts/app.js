'use strict';

/**
 * @ngdoc overview
 * @name tosUtilsApp
 * @description
 * # tosUtilsApp
 *
 * Main module of the application.
 */
angular
  .module('tosUtilsApp', [
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
