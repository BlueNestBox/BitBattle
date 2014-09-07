'use strict';

describe('Controller: KioskFinishCtrl', function () {

  // load the controller's module
  beforeEach(module('bitbattleApp'));

  var KioskFinishCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KioskFinishCtrl = $controller('KioskFinishCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
