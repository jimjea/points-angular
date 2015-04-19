angular.module('points.pointsDisplay', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('pointsDisplayMain', {
      url: '/pointsDisplayMain',
      templateUrl: 'app/pointsDisplay/pointsDisplayMain.html',
      controller: 'PointsDisplayController'
    })
    .state('pointsDisplayPerson', {
      url: '/pointsDisplayPerson',
      templateUrl: 'app/pointsDisplay/pointsDisplayPerson.html',
      controller: 'PointsDisplayController'
    })
})

.controller('PointsDisplayController', function($scope, $state, PointsDisplay) {
  $scope.goToEditor = function() {
    $state.go('editor');
  };
  $scope.users = PointsDisplay.allUsers;
  $scope.seeUser = function() {
    var clickedUser = angular.element(this)[0].user.name;
    PointsDisplay.clickedUser(clickedUser);
    $state.go('pointsDisplayPerson');
  };
  $scope.selectedUser = PointsDisplay.allUsers[PointsDisplay.currentUser];
});
