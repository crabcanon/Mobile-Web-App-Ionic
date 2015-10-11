'use strict';

angular.module('Crabcanon.directives', [])

.directive('tabsSwipable', ['$ionicGesture', function($ionicGesture){
  //
  // make ionTabs swipable. leftswipe -> nextTab, rightswipe -> prevTab
  // Usage: just add this as an attribute in the ionTabs tag
  // <ion-tabs tabs-swipable> ... </ion-tabs>
  //
  return {
    restrict: 'A',
    require: 'ionTabs',
    link: function(scope, elm, attrs, tabsCtrl){
      var onSwipeLeft = function(){
        var target = tabsCtrl.selectedIndex() + 1;
        if(target < tabsCtrl.tabs.length){
          scope.$apply(tabsCtrl.select(target));
          // elm.removeClass('slide-right-left');
          // elm.addClass('slide-left-right');
          
        }
      };
      var onSwipeRight = function(){
        var target = tabsCtrl.selectedIndex() - 1;
        if(target >= 0){
          scope.$apply(tabsCtrl.select(target));
          // elm.removeClass('slide-left-right');
          // elm.addClass('slide-right-left');
        }
      };
        
      var swipeGesture = $ionicGesture.on('swipeleft', onSwipeLeft, elm).on('swiperight', onSwipeRight);
      scope.$on('$destroy', function() {
        $ionicGesture.off(swipeGesture, 'swipeleft', onSwipeLeft);
        $ionicGesture.off(swipeGesture, 'swiperight', onSwipeRight);
      });
    }
  };
}]);

