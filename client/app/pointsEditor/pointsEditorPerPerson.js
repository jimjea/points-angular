angular.module('points.editorPerPerson', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('editorPerPerson', {
      url: '/editorPerPerson',
      templateUrl: 'app/pointsEditor/pointsEditorPerPerson.html',
      controller: 'EditorPerPerson'
    })
})

.controller('EditorPerPerson', function($scope, $state, PointsEditor) {
  $scope.girlData = PointsEditor.testData[PointsEditor.currentGirl];
  $scope.score = {
    bang: 0,
    kiss: 0,
    blow: 0,
    date: 0
  };
  $scope.updateGirl = function(data) {
    PointsEditor.updateGirl(data);
  };
  $scope.sendUpdatedGirlData = function() { // this function seems redundant bc it just invokes the previous function
    $scope.updateGirl($scope.score);
    $state.go('editor');
  }
  $scope.backToGirls = function() {
    $state.go('editor');
  };
});
