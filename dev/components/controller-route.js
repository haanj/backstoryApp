angular.module('RouteModule', [require('angular-route')])
  .config(['$routeProvider', function(route) {
    route
      .when('/backstory', {
        templateUrl: './templates/backstory-view.html',
        controller: 'BackstoryController',
        controllerAs: 'storyctrl'
      })
      .when('/index', {
        templateUrl: './templates/index-view.html'
      })
      .otherwise({
        redirectTo: '/index'
      })
  
  }])
