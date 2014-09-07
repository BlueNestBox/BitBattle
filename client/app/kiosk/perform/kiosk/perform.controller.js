'use strict';

angular.module('bitbattleApp')
  .controller('KioskPerformCtrl', function ($scope, $http, socket, $location) {


    $scope.challenge = {name: '', btc: 0, usd: 0}
    $scope.timer = 120
    // $scope.dirty = false

    $http.post('/api/kiosk/get-challenge', {challenge: ($location.search()).id})
      .success(function(data){
        $scope.challenge = data.challenge
        console.log(data)


        var countdown = setInterval(function(){
          // window['awesomeDate'] = data.confirm.endTime
          var timeRemaining = new Date(new Date(data.confirm.endTime) - new Date()).getSeconds()
          $scope.timer = timeRemaining
          // console.log($scope.timer)
          if(timeRemaining <= 0){
            clearInterval(countdown)

          }
        }, 500)
        // socket.emit()
        // console.log(socket)
      })

    // }).success(function(challenge){

    // })

    // $http.get('/api/things').success(function(awesomeThings) {

    //   window['awesomeThingsGlob'] = awesomeThings

    //   awesomeThings = _.sortBy(awesomeThingsGlob, function(obj){ console.log(-obj.btc); return -obj.btc})

    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);

    //   // console.log(awesomeThings[($location.search()).id], awesomeThings, ($location.search()).id)

    //   var id = ($location.search()).id
    //     , currentThing = null

    //   _.forEach(awesomeThings, function (thing) {
    //     if(thing._id === id){
    //       currentThing = thing
    //     }
    //   })
    //   if(currentThing === null){
    //     $location.path('/kiosk')
    //   }

    //   $scope.challenge = currentThing


  });
