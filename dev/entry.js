'use strict';

const angular = require('angular');

//require('/components/home/home-controller');
//require('./components/nav/nav-controller');
//require('./components/landing/landing-controller');
//require('./components/router/route-controller');
//require('./components/header/header-controller');
//require('./components/main/main-controller');
require('./components/directive-header.js')

(function () {
  angular.module('App', ['HeaderModule']);
})();
