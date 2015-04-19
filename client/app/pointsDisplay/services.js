angular.module('points.pointsDisplayServices', [])

.factory('PointsDisplay', function(PointsEditor) {
  var User = function(name, totalScore, girls) {
    this.name = name;
    this.totalScore = totalScore || 0;
    this.girls = girls || {};
  };

  var allUsers = {
    'Jimmy': new User('Jimmy', null, PointsEditor.testData),
    'Franco': new User('Franco'),
    'Puneet': new User('Puneet')
  };

  var currentUser = [];
  var clickedUser = function(name) {
    currentUser.pop();
    currentUser.push(name);
  };

  var updateTotalScore = function(data) {
    allUsers[data.user].totalScore = data.totalScore;
  };

  return {
    allUsers: allUsers,
    updateTotalScore: updateTotalScore,
    clickedUser: clickedUser,
    currentUser: currentUser
  };
});
