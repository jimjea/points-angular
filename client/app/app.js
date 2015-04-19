angular.module('points', [
  'points.auth',
  'points.authServices',
  'points.pointsDisplay',
  'points.pointsDisplayServices',
  'points.editor',
  'points.editorServices',
  'points.editorPerPerson'
])

// strictly using this to be able to sort the test data as an object, not an array
.filter("toArray", function(){
  return function(obj) {
    var result = [];
    angular.forEach(obj, function(val, key) {
      result.push(val);
    });
    return result;
  };
})

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signup');
});
