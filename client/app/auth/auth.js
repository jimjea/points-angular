angular.module('points.auth', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'Auth'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup.html',
      controller: 'Auth'
    })
})

.controller('Auth', function($scope, $state) {
  $scope.validate = function() {
    $state.go('somwhere');
  };
})
