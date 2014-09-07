'use strict';

angular.module('bitbattleApp')
  .controller('KioskConfirmCtrl', function ($scope, $http, socket, $location) {

    $scope.challenge = {name: '', btc: 0, usd: 0}
    $scope.dirty = false

    $http.get('/api/things').success(function(awesomeThings) {

      window['awesomeThingsGlob'] = awesomeThings

      awesomeThings = _.sortBy(awesomeThingsGlob, function(obj){ console.log(-obj.btc); return -obj.btc})

      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);

      // console.log(awesomeThings[($location.search()).id], awesomeThings, ($location.search()).id)

      var id = ($location.search()).id
        , currentThing = null

      _.forEach(awesomeThings, function (thing) {
        if(thing._id === id){
          currentThing = thing
        }
      })
      if(currentThing === null){
        $location.path('/kiosk')
      }

      $scope.challenge = currentThing

      $scope.readyUp = function() {
        $scope.dirty = true
        if($scope.email) {
          $http.post('/api/kiosk/confirm', {email: $scope.email, challenge: id})
            .success(function(data){
              if(data.err){
                alert(data.err)
                $location.path(data.url)
              }else{
                $location.path('/kiosk/perform').search('id', data._id)
              }
            })
        }
      }

    });

    // $http.get('/api/ustream').success(function(ustream){
    //   console.log(ustream)
    //   $scope.viewerCount = ustream.channel.stats.viewer ? ustream.channel.stats.viewer : 0
    // });

  });
