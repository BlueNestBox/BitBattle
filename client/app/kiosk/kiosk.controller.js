'use strict';

angular.module('bitbattleApp')
  .controller('KioskCtrl', function ($scope, $http, socket) {

    $scope.awesomeThings = [];
    $scope.viewerCount = 0;

    $http.get('/api/things').success(function(awesomeThings) {

      window['awesomeThingsGlob'] = awesomeThings

      awesomeThings = _.sortBy(awesomeThingsGlob, function(obj){ console.log(-obj.btc); return -obj.btc})

      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $http.get('/api/ustream').success(function(ustream){
      console.log(ustream)
      $scope.viewerCount = ustream.channel.stats.viewer ? ustream.channel.stats.viewer : 0
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  });
