angular.module('points', [
  'points.auth',
  'points.authServices',
  'points.pointsDisplay',
  'points.pointsDisplay',
  'points.editor',
  'points.editorServices'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
