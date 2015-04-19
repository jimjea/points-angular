angular.module('points.editorServices', [])

.factory('PointsEditor', function() {
  var Girl = function(day, name, bang, kiss, blow, date, score) {
    this.day = day;
    this.name = name;
    this.bang = bang || 0;
    this.kiss = kiss || 0;
    this.blow = blow || 0;
    this.date = date || 0;
    this.score = score || 0;
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
    console.log(data['score'])
    for (var key in data) {
      if (data[key] > 0) {
        testData[currentGirl][key] = data[key];
      } else {
        testData[currentGirl][key] = 0;
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
