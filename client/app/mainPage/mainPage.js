angular.module('points.mainPage', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('mainPage', {
      url: '/mainpage',
      templateUrl: 'app/mainPage/mainPage.html',
      controller: 'MainPageController'
    })
})

.controller('MainPageController', function($scope, $state) {

});
