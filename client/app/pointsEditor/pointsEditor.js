angular.module('points.editor', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('editor', {
      url: 'editor',
      templateUrl: 'app/pointsEditor/pointsEditor.html',
      controller: 'EditorController'
    })
})

.controller('EditorController', function($scope, $state) {

});
