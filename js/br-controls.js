angular.module( 'br.controls', [] )
.directive( 'brRadio', function(){
  return {
    restrict: 'C',
    scope: {
      ngModel: '=',
      activate: "="
    },
    link: function( scope ,element, attributes ){
      if( scope.activate === undefined ){
        scope.activated = true;
      }
      scope.isActivated = function(){
        return ( scope.activate === undefined || eval(scope.activate ))
      }
      scope.$watch('isActivated()', function( active ){
        if( !scope.activated && active ){
          scope.activated = true
          if( !element[0].checked ){
            scope.ngModel = attributes.brFalseValue;
          }
        }
      })
      scope.$watch( "isChecked()", function(newStatus){
        if( scope.activated ){
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
      activate: "="
    },
    link: function( scope ,element, attributes ){
      if( scope.activate === undefined ){
        scope.activated = true;
      }
      scope.isActivated = function(){
        return ( scope.activate === undefined || eval(scope.activate ))
      }
      scope.$watch('isActivated()', function( active ){
        if( !scope.activated && active ){
          scope.activated = true
          if( !element[0].checked ){
            scope.ngModel = attributes.ngFalseValue;
          }
        }
      })
    }
  }
})

