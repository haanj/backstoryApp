'use strict';

const app = angular.module('LandingModule', [])

require(__dirname + '/../../services/auth_service')(app);
// ADD IN ERROR AND AUTH SERVICES ?? TO FUNCTION AS WELL

  app.controller('LandingController',['$log', '$http', '$location', 'AuthService',
  function($log, $http, $location, AuthService) {

    const vm = this;
    // vm.error = ErrorService();

    vm.signIn = function(user) {
      AuthService.signIn(user, (err, res) => {
        // if (err) return ErrorService('Problem signing in')
        if (err) {
          throw err;
          $location.path('/login')
        }
        $location.path('/index');
      })
    }

    vm.signUp = function(user) {
      AuthService.createUser(user, function(err, res) {
        // if (err) return ErrorService('Problem Creating User');
        $location.url('/index');
      })
    }
    //
    // vm.signOut = function() {
    //   AuthService.signOut(() => {
    //     $location.path('/signUp');
    //   })
    // }

    vm.continueTo = function() {
      $log.log('ContinueTo HAS BEEN HIT');
      $location.url('/index')
    }

    vm.signUpPage = function() {
      $location.url('/signUp')
    }

  }])

  // .directive('landingPage', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: './landing-view.html',
  //     controller: 'LandingController'
  //   }
  // })
  // SHOW THE  NECESSARY VIEWS
