angular.module('points', [

])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});
