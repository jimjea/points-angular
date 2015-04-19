angular.module('points.pointsDisplay', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('pointsDisplayMain', {
      url: '/pointsDisplayMain',
      templateUrl: 'client/app/pointsDisplay/pointsDisplayMain.html',
      controller: 'PointsDisplayController'
    })
    .state('pointsDisplayPerson', {
      url: '/pointsDisplayPerson',
      templateUrl: 'client/app/pointsDisplay/pointsDisplayPerson.html',
      controller: 'PointsDisplayController'
    })
})

.controller('PointsDisplayController', function($scope, $state, PointsDisplay) {
  $scope.goToEditor = function() {
    $state.go('editor');
  };
  $scope.users = PointsDisplay.allUsers;
  $scope.selectedUser = PointsDisplay.allUsers[PointsDisplay.currentUser];
  $scope.seeUser = function() {
    var clickedUser = angular.element(this)[0].user.name;
    PointsDisplay.clickedUser(clickedUser);
    $state.go('pointsDisplayPerson');
  };
  $scope.goToMainDisplay = function() {
    $state.go('pointsDisplayMain');
  };

  $scope.logOut = function() {
    $state.go('signup');
  };
});
