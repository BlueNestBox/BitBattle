'use strict';

angular.module('bitbattleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kiosk/confirm', {
        url: '/kiosk/confirm',
        templateUrl: 'app/kiosk/confirm/kiosk/confirm.html',
        controller: 'KioskConfirmCtrl'
      });
  });
