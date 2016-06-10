'use strict';

const angular = require('angular');

require('./components/directive-header.js');
require('./components/controller-backstory.js');

angular.module('App', ['HeaderModule', 'BackstoryModule']);
