'use strict';

/**
 * @ngdoc service
 * @name musicaParkerApp.mediaService
 * @description
 * # mediaService
 * Service in the musicaParkerApp.
 */
angular.module('musicaParkerApp')
  .service('mediaService', ['s3url', '$http', '$q', function (s3url, $http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var catalog = null;

    function getAndCacheCatalog() {
      if (catalog) {
        return $q.when(catalog);
      }

      return $http.get(s3url + '/catalog.json')
        .then(function(result) {
          catalog = result.data;
          return catalog;
        });
    }

    function getCatalog() {
      return getAndCacheCatalog();
    }

    function getAudioCatalog() {
      return getCatalog()
        .then(function(result) {
          return result.audio;
        });
    }

    function getVideoCatalog() {
      return getCatalog()
        .then(function(result) {
          return result.video;
        });
    }

    return {
      getAudioCatalog: getAudioCatalog,
      getVideoCatalog: getVideoCatalog
    };
  }]);
