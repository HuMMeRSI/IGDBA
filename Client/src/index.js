import angular from 'angular';
import 'reset-css';
import './style/main';
import appCtrl from './appCtrl';
import mainComp from './components/main/mainComp';

const MODULE_NAME = 'IGDBA';
window.IGDBA = angular
	.module(MODULE_NAME, [require('angular-route'), require('angular-material')])
	.controller('appCtrl', appCtrl);
mainComp();

require('./views/gameView/gameViewCtrl.js');
require('./views/gamesList/gamesListCtrl.js');
require('./views/mapView/mapViewCtrl.js');
require('./views/facebook/facebookViewCtrl.js');
require('./views/gameUpdateView/gameUpdateViewCtrl.js');
require('angular-material/angular-material.min.css');

IGDBA.config(($routeProvider) => {
	$routeProvider.when('/', {
		template: require('./views/mainView/mainView.html')
	}).when('/gameView', {
		template: require('./views/gameView/gameView.html'),
		controller: 'gameViewCtrl'
	}).when('/games', {
		template: require('./views/gamesList/gamesListView.html'),
		controller: 'gamesListCtrl'
	}).when('/events', {
		template: require('./views/mapView/mapView.html'),
		controller: 'mapViewCtrl'
	}).when('/facebook', {
		template: require('./views/facebook/facebookView.html'),
		controller: 'facebookViewCtrl'
	}).when('/gameUpdate', {
		template: require('./views/gameUpdateView/gameUpdateView.html'),
		controller: 'gameUpdateViewCtrl'
	});
});
