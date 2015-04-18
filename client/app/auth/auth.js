angular.module('points.auth', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
})

.controller('AuthController', function($scope, $state, Auth) {
  $scope.name = '';
  $scope.password = '';
  $scope.validate = function() {
    Auth.userInfoCapture({name: $scope.name, password: $scope.password}); // yes i know it's not secure at the moment
    $state.go('pointsDisplayMain');
  };
});
