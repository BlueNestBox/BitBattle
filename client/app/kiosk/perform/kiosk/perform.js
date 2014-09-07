'use strict';

angular.module('bitbattleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kiosk/perform', {
        url: '/kiosk/perform',
        templateUrl: 'app/kiosk/perform/kiosk/perform.html',
        controller: 'KioskPerformCtrl'
      });
  });