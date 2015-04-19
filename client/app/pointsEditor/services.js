angular.module('points.editorServices', [])

.factory('PointsEditor', function() {
  var Girl = function(day, name, bang, kiss, blow, date, score) {
    this.day = day;
    this.name = name;
    this.bang = bang || null;
    this.kiss = kiss || null;
    this.blow = blow || null;
    this.date = date || null;
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
      if (data[key] > 0 || data[key] === 0) {
        testData[currentGirl][key] = data[key];
    console.log(testData[currentGirl]['score'])
      } else {
        testData[currentGirl][key] = null;
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
