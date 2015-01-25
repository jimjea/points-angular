angular.module('points.auth'['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'Auth'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/login/signup.html',
      controller: 'Auth'
    })
})

.controller('Auth', function($scope, $state) {

})