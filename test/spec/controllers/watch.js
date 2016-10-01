'use strict';

describe('Controller: WatchCtrl', function () {

  // load the controller's module
  beforeEach(module('musicaParkerApp'));

  var WatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WatchCtrl = $controller('WatchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WatchCtrl.awesomeThings.length).toBe(3);
  });
});
