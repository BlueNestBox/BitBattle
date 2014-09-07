'use strict';

describe('Controller: KioskConfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('bitbattleApp'));

  var KioskConfirmCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KioskConfirmCtrl = $controller('KioskConfirmCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
