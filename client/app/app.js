angular.module('points', [
  'points.auth',
  'points.pointsDisplay',
  'points.editor'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
