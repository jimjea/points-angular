angular.module('points.editorPerPerson', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('editorPerPerson', {
      url: '/editorPerPerson',
      templateUrl: 'app/pointsEditor/pointsEditorPerPerson.html',
      controller: 'EditorPerPerson'
    })
})

.controller('EditorPerPerson', function($scope) {
  
});
