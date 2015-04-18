angular.module('points.editorServices', [])

.factory('PointsEditor', function() {
  var Girl = function(day, name, bang, kiss, blow, date) {
    this.day = day;
    this.name = name;
    this.bang = bang || null;
    this.kiss = kiss || null;
    this.blow = blow || null;
    this.date = date || null;
  };
  var testData = {
    'Nataly': new Girl('4/2/2015', 'Nataly'),
    'Sue': new Girl('3/29/2015', 'Sue'),
    'Amelia': new Girl('3/20/2015', 'Amelia')
  };

  return {
    testData: testData
  };

});
