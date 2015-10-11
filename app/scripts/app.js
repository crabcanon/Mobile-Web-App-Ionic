'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
angular.module('Crabcanon', ['ionic', 'config', 'firebase', 'angularMoment', 'Crabcanon.controllers', 'Crabcanon.services', 'Crabcanon.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    abstract: true,
    controller: 'MainCtrl'
  })
  .state('main.projects', {
    url: '/projects',
    views: {
      'projects-tab': {
        templateUrl: 'templates/main.projects.html',
        controller: 'ProjectsCtrl'
      }
    }
  })
  .state('main.projects.detail', {
    url: '/:projectID',
    templateUrl: 'templates/main.projects.detail.html',
    controller: 'ProjectsDetailCtrl'
  })
  .state('main.notes', {
    url: '/notes',
    views: {
      'notes-tab': {
        templateUrl: 'templates/main.notes.html',
        controller: 'NotesCtrl'
      }
    }
  })
  .state('main.notes.detail', {
    url: '/:noteID',
    templateUrl: 'templates/main.notes.detail.html',
    controller: 'NotesDetailCtrl'
  })
  .state('main.about', {
    url: '/about',
    templateUrl: 'templates/main.about.html',
    controller: 'AboutCtrl'
  })
  .state('main.contact', {
    url: '/contact',
    views: {
      'contact-tab': {
        templateUrl: 'templates/main.contact.html',
        controller: 'ContactCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

});
