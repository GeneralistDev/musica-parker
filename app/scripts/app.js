'use strict';

/**
 * @ngdoc overview
 * @name musicaParkerApp
 * @description
 * # musicaParkerApp
 *
 * Main module of the application.
 */
angular
  .module('musicaParkerApp', [
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
        redirectTo: '/listing'
      })
      .when('/listing', {
        templateUrl: 'views/listing.html',
        controller: 'ListingCtrl',
        controllerAs: 'listing'
      })
      .when('/watch', {
        templateUrl: 'views/watch.html',
        controller: 'WatchCtrl',
        controllerAs: 'watch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
