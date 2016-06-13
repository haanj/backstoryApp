'use strict';

const angular = require('angular');

require('./components/directive-header.js');
require('./components/controller-backstory.js');
require('./components/controller-route.js')

angular.module('App', ['HeaderModule', 'RouteModule', 'BackstoryModule']);
