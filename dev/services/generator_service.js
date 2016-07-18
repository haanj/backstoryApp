// This module may eventually handle the calls to the API when the API is built out.
// Meanwhile, it holds placeholder generator code.
module.exports = function(app) {
  app.factory('GeneratorService', [function() {
    var myService = {};

    var backstory = [];
    
    // retrieves story from service
    myService.getStory = function() {
      return require('./generator')();
    } 

    return myService;
  }]);
}
