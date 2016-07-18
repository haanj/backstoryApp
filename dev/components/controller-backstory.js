var app = angular.module('BackstoryModule', []);
require('../services/generator_service.js')(app);

app
  .controller('BackstoryController', ['GeneratorService', BackstoryController])
  .directive('backstory', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl:'./templates/backstory-view.html'
    };
  });

function BackstoryController (generator) {
  let backstoryRoute = 'http://localhost:3000/stories';
  this.backstory = [];

  this.getBackstory = function() {
    this.backstory = generator.getStory();
  };
}
