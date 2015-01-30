angular.module('points', [
  'points.auth',
  'points.pointsDisplay'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
