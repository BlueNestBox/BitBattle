'use strict';
angular.module('bitbattleApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.copyright = {
      text: 'BitBattle.org',
      url: 'https://twitter.com/Bit_Battle',
      year: new Date().getFullYear()
    };
  });
