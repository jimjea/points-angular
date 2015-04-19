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
    bang: $scope.girlData.bang,
    blow: $scope.girlData.blow,
    kiss: $scope.girlData.kiss,
    date: $scope.girlData.date,
    score: $scope.girlData.score
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
  $scope.updateScore = function() {
    $scope.score.score = $scope.score.bang || $scope.score.blow || $scope.score.kiss || $scope.score.date || 0;
  };
});
