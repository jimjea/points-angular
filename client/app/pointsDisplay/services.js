angular.module('points.pointsDisplayServices', [])

.factory('PointsDisplay', function(PointsEditor) {
  var User = function(name, totalScore) {
    this.name = name;
    this.totalScore = totalScore || 0;
  };

  var allUsers = {
    'Jimmy': new User('Jimmy'),
    'Franco': new User('Franco'),
    'Puneet': new User('Puneet')
  };

  var updateTotalScore = function(data) {
    allUsers[data.user].totalScore = data.totalScore;
  };

  return {
    allUsers: allUsers,
    updateTotalScore: updateTotalScore
  };
});
