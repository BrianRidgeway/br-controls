angular.module( 'br.controls', [] )
.directive( 'brRadio', function(){
  return {
    restrict: 'E',
    scope: {
      name: '@',
      id: '@',
      value: '@',
      offValue: '@',
      model: "=",
      initiate: "="
    },
    template: '<input type="radio" ng-model="model" ng-change="check()" name="{{name}}" id="{{id}}" ng-value="value">',
    link: function( scope ,element, attributes ){
      if( scope.initiate && eval(scope.initiate )){
        if( !element[0].firstChild.checked ){
          scope.model = scope.offValue;
        }
      }
      scope.$watch( "isChecked()", function(newStatus){
       if( newStatus ){
          scope.model = scope.value
        }
        else{
          scope.model = scope.offValue
        } 
      })
      scope.isChecked = function(){
        return element[0].firstChild.checked
      }
    }
  }
})
