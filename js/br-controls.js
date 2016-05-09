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
    template: '<input type="radio" ng-model="model" name="{{name}}" id="{{id}}" ng-value="value">',
    link: function( scope ,element, attributes ){
      if( scope.initiate === undefined ){
        scope.initiated = true;
      }
      scope.isInitiated = function(){
        return ( scope.initiate === undefined || eval(scope.initiate ))
      }
      scope.$watch('isInitiated()', function( active ){
        if( !scope.initiated && active ){
          scope.initiated = true
          if( !element[0].firstChild.checked ){
            scope.model = scope.offValue;
          }
        }
      })
      scope.$watch( "isChecked()", function(newStatus){
        if( scope.initiated ){
          if( newStatus ){
            scope.model = scope.value
          }
          else{
            scope.model = scope.offValue
          } 
        }
      })
      scope.isChecked = function(){
        return element[0].firstChild.checked
      }
    }
  }
})
