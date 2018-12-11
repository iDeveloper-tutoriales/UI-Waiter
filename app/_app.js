(function(angular){
  'use strict';
  const app = angular.module('_app',['ngRoute'])
  app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
    var rp = $routeProvider.when('/',{
      templateUrl:'views/home.html'
    }).when('/lists',{
      templateUrl:'views/lists.html'
    }).when('/navs',{
      templateUrl:'views/navs.html'
    }).when('/cards',{
      templateUrl:'views/cards.html'
    }).when('/form',{
      templateUrl:'views/form.html'
    }).when('/cv',{
      templateUrl:'views/cv.html'
    }).when('/portfolio',{
      templateUrl:'views/portfolio.html'
    }).otherwise({
      redirectTo: '/'
    });

  }]);

})(window.angular);
