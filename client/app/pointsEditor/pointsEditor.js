angular.module('points.editor', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('editor', {
      url: '/editor',
      templateUrl: 'app/pointsEditor/pointsEditor.html',
      controller: 'EditorController'
    })
    .state('addGirl', {
      url: '/addGirl',
      templateUrl: 'app/pointsEditor/addGirl.html',
      controller: 'EditorController'
    })
})

.controller('EditorController', function($scope, $state, PointsEditor, PointsDisplay, Auth) {
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
  $scope.totalScore = function() {
    var sum = 0;
    var obj = PointsEditor.testData;
    for (var key in obj) {
      sum += obj[key].score;
    }
    PointsDisplay.updateTotalScore({user: Auth.userInfo.name, totalScore: sum});
    return sum;
  };
  $scope.goToAddGirl = function() {
    $state.go('addGirl');
  };

  // for today's date
  var date = new Date();
  var year = date.getUTCFullYear();
  var month = date.getUTCMonth();
  var day = date.getUTCDate();
  month = ("0" + (month + 1)).slice(-2)
  year = year.toString().substr(2,2)
  var formattedDate = month + '/' + day + '/' + year;

  $scope.newGirl = {
    name: '',
    day: formattedDate  
  };
  $scope.addGirl = function(data) {
    $scope.nameTaken = PointsEditor.addGirl(data) || '';
  };
});
