'use strict';

angular.module('Crabcanon.controllers', [])

.controller('IntroCtrl', ['$scope', '$state', '$ionicSlideBoxDelegate', 
  function ($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main.projects');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
}])

.controller('MainCtrl', ['$scope', '$state', 
  function ($scope, $state) {

  $scope.toIntro = function(){
    $state.go('intro');
  };
}])

.controller('ProjectsCtrl', ['$scope', '$state', '$firebase', '$ionicLoading', '$timeout',
  function ($scope, $state, $firebase, $ionicLoading, $timeout){
  
  //Setup the loader
  $ionicLoading.show({
    templateUrl:'templates/loadingProjects.html'
  });

  $ionicLoading.hide();
  // now we can use $firebase to synchronize data between clients and the server
  var ref = new Firebase('https://crabcanon.firebaseio.com/projects');

  // create an AngularFire reference to the data
  var sync = $firebase(ref);

  // download the data into a object
  // all server changes are applied in realtime
  var projectsObject = sync.$asObject();
  $scope.projects = projectsObject;


  $scope.doRefreshProjects = function(){
    $timeout(function(){
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };

  $scope.showProjectsSearch = false;
  $scope.clearProjectsSearch = function(){
    $scope.showProjectsSearch = !$scope.showProjectsSearch;
  };
}])

.controller('ProjectsDetailCtrl', ['$scope', '$state', '$firebase', 
  function ($scope, $state, $firebase){

}])

.controller('NotesCtrl', ['$scope', '$state', '$firebase', '$ionicLoading', '$timeout', 
  function ($scope, $state, $firebase, $ionicLoading, $timeout){

  $ionicLoading.show({
    templateUrl:'templates/loadingNotes.html'
  });

  
  $ionicLoading.hide();
  // now we can use $firebase to synchronize data between clients and the server
  var ref = new Firebase('https://crabcanon.firebaseio.com/notes');

  // create an AngularFire reference to the data
  var sync = $firebase(ref);

  // download the data into a object
  // all server changes are applied in realtime
  var notesObject = sync.$asObject();
  
  $scope.notes = notesObject;

  $scope.doRefreshNotes = function(){
    $timeout(function(){
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };

  $scope.showNotesSearch = false;
  $scope.clearNotesSearch = function(){
    $scope.showNotesSearch = !$scope.showNotesSearch;
  }

}])

.controller('NotesDetailCtrl', ['$scope', '$state', function ($scope, $state){

}])
.controller('AboutCtrl', ['$scope', function ($scope) {
  
}])
.controller('ContactCtrl', ['$scope', '$state', function ($scope, $state){

}]);
