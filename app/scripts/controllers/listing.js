'use strict';

/**
 * @ngdoc function
 * @name musicaParkerApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the musicaParkerApp
 */
angular.module('musicaParkerApp')
  .controller('ListingCtrl', ['mediaService', 's3url', function (mediaService, s3url) {
    var vm = this;

    vm.audioUrl = s3url + '/audio/';

    mediaService.getAudioCatalog()
      .then(function(audioFiles) {
        vm.audioFiles = audioFiles;
      });

    mediaService.getVideoCatalog()
      .then(function(videoFiles) {
        vm.videoFiles = videoFiles;
      });
  }]);
