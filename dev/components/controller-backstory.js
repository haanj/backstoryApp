angular.module('BackstoryModule', [])
  .controller('BackstoryController', ['$http', BackstoryController])
  .directive('backstory', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl:'./templates/backstory-view.html'
    };
  });

function BackstoryController ($http) {
  let backstoryRoute = 'http://localhost:3000/stories';
  this.backstory = [];

  this.getBackstory = function() {
    $http.get(backstoryRoute)
      .then((results) => {
        this.backstory = results.data;
      }, (err) => {
        console.log('error');
      })
  };
}
