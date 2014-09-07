'use strict';

angular.module('bitbattleApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          console.log(err)
          $scope.errors.other = err;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.action = function(action) {
      if(action.name == 'signup'){

        $location.path('/signup')
        .search({email: action.data})

      }else if(action.name == 'recover'){

        $location.path('/account/recover')
        .search({email: action.data});

      }
    }

  });
