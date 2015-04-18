angular.module('points.editorServices', [])

.factory('PointsEditor', function() {
  var testData = {
    'Nataly': {
      date: '4/2/2015',
      name: 'Nataly'
    },
    'Sue': {
      date: '3/28/2015',
      name: 'Sue'
    },
    'Amelia': {
      date: '3/20/2015',
      name: 'Amelia'
    }
  };

  return {
    testData: testData
  };

});
