angular.module('points', [
  'points.auth'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
