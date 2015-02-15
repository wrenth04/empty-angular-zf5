'use strict';

describe('Controller: TitlebarCtrl', function () {

  // load the controller's module
  beforeEach(module('shoait01App'));

  var TitlebarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TitlebarCtrl = $controller('TitlebarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
