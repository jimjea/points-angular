angular.module('points', [
  'points.auth',
  'points.authServices',
  'points.pointsDisplay',
  'points.pointsDisplay',
  'points.editor',
  'points.editorServices',
  'points.editorPerPerson'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
