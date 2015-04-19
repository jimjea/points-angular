angular.module('points', [
  'points.auth',
  'points.authServices',
  'points.pointsDisplay',
  'points.pointsDisplayServices',
  'points.editor',
  'points.editorServices',
  'points.editorPerPerson'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
