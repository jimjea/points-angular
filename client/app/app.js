angular.module('points', [
  'points.auth',
  'points.mainPage'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
