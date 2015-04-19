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
  $scope.userName = Auth.userInfo.name;
  $scope.goToAllPoints = function() {
    $state.go('pointsDisplayMain');
  };
  $scope.editPerPerson = function() {
    var clickedGirl = angular.element(this)[0].data.name;
    PointsEditor.clickedGirl(clickedGirl);
    $state.go('editorPerPerson');
  };
  console.log(PointsEditor.testData['Amelia'])
});
