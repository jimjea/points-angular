angular.module('points.editorServices', [])

.factory('PointsEditor', function() {
  var Girl = function(day, name, bang, kiss, blow, date) {
    this.day = day;
    this.name = name;
    this.bang = bang || false;
    this.kiss = kiss || false;
    this.blow = blow || false;
    this.date = date || false;
  };

  var testData = {
    'Nataly': new Girl('4/2/2015', 'Nataly'),
    'Sue': new Girl('3/29/2015', 'Sue'),
    'Amelia': new Girl('3/20/2015', 'Amelia')
  };

  var currentGirl = ['Amelia'];
  var clickedGirl = function(name) {
    currentGirl.pop();
    currentGirl.push(name);
  };

  var updateGirl = function(data) {
    for (var key in data) {
      if (data[key] > 0) {
        testData[currentGirl][key] = true;
      } else {
        testData[currentGirl][key] = false;
      }
    }
  };

  return {
    testData: testData,
    clickedGirl: clickedGirl,
    currentGirl: currentGirl,
    updateGirl: updateGirl
  };

});
