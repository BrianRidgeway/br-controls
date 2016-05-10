angular.module( 'br.controls', [] )
.directive( 'brRadio', function(){
  return {
    restrict: 'C',
    scope: {
      ngModel: '=',
      initiate: "="
    },
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
          if( !element[0].checked ){
            scope.ngModel = attributes.brFalseValue;
          }
        }
      })
      scope.$watch( "isChecked()", function(newStatus){
        if( scope.initiated ){
          if( newStatus ){
            scope.ngModel = attributes.value
          }
          else{
            scope.ngModel = attributes.brFalseValue
          }
        }
      })
      scope.isChecked = function(){
        return element[0].checked
      }
    }
  }
})
.directive( 'brCheckbox', function(){
  return {
    restrict: 'C',
    scope: {
      ngModel: '=',
      initiate: "="
    },
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
          if( !element[0].checked ){
            scope.ngModel = attributes.ngFalseValue;
          }
        }
      })
    }
  }
})

