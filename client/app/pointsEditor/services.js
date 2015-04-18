angular.module('points.editorServices', [])

.factory('PointsEditor', function() {
  var testData = {
    1: {
      date: '4/2/2015',
      name: 'Nataly'
    },
    2: {
      date: '3/28/2015',
      name: 'Sue'
    },
    3: {
      date: '3/20/2015',
      name: 'Amelia'
    }
  };

  return {
    testData: testData
  };

});
