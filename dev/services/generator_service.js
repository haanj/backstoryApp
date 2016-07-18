// This module may eventually handle the calls to the API when the API is built out.
// Meanwhile, it holds placeholder generator code.
module.exports = function(app) {
  app.factory('GeneratorService', [function() {
    var myService = {};

    var backstory = [
      {"title":"Race","value":"goblin"}
     ,{"title":"Occupation","value":"thief"}
     ,{"title":"Age","value":"ancient"}
     ,{"title":"Father's Occupation","value":"adventurer"}
     ,{"title":"Mother's Occupation","value":"banker"}
     ,{"title":"Hair Color","value":"light brown"}
     ,{"title":"Eye Color","value":"dark green"}
     ,{"title":"Height","value":"tall"}
     ,{"title":"Build","value":"obese"}
     ,{"title":"Family Wealth","value":"low income"}
     ,{"title":"Home City Size","value":"metropolis"}
     ,{"title":"Likes","value":"pilgrimage"}
     ,{"title":"Dislikes","value":"following"}
     ,{"title":"Motives","value":"love"}
     ,{"title":"Starting Quest","value":"Start a rebellion"}];
    
    // retrieves story from service
    myService.getStory = function() {
      console.log('get story');
      return backstory;
    };

    // generates new story and returns. Currently doesn't do anything different than getStory
    myService.newStory = function() {
      return backstory;
    };

    return myService;
  }]);
}
