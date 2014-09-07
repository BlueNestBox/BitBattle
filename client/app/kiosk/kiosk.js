'use strict';

angular.module('bitbattleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kiosk', {
        url: '/kiosk',
        templateUrl: 'app/kiosk/kiosk.html',
        controller: 'KioskCtrl'
      });
  });
