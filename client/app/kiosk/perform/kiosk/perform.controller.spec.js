'use strict';

describe('Controller: KioskPerformCtrl', function () {

  // load the controller's module
  beforeEach(module('bitbattleApp'));

  var KioskPerformCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KioskPerformCtrl = $controller('KioskPerformCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
