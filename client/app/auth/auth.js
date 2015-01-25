angular.module('points.login'['ui.router'])

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