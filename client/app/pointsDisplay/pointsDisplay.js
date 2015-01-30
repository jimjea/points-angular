angular.module('points.pointsDisplay', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('pointsDisplayMain', {
      url: '/pointsDisplayMain',
      templateUrl: 'app/pointsDisplay/pointsDisplayMain.html',
      controller: 'PointsDisplayController'
    })
})

.controller('PointsDisplayController', function($scope, $state) {

});
