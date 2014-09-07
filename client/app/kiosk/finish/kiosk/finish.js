'use strict';

angular.module('bitbattleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kiosk/finish', {
        url: '/kiosk/finish',
        templateUrl: 'app/kiosk/finish/kiosk/finish.html',
        controller: 'KioskFinishCtrl'
      });
  });