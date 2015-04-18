angular.module('points.editor', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('editor', {
      url: '/editor',
      templateUrl: 'app/pointsEditor/pointsEditor.html',
      controller: 'EditorController'
    })
})

.controller('EditorController', function($scope, $state, PointsEditor, Auth) {
  $scope.testData = PointsEditor.testData;
  console.log($scope.testData)
  $scope.userName = Auth.userInfo.name;
  $scope.goToAllPoints = function() {
    $state.go('pointsDisplayMain');
  };
  $scope.editPerPerson = function() {
    $state.go('editorPerPerson');
  };
  $scope.test1 = '';
});

