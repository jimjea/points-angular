angular.module('points.authServices', [])

.factory('Auth', function($http) {
  var userInfo = {
    name: 'Jimmy',
    password: 123
  };
  var userInfoCapture = function(data) {
    userInfo.name = data.name;
  };

  return {
    userInfoCapture: userInfoCapture,
    userInfo: userInfo
  };
});
