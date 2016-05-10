# br-controls
AngularJS HTML5 Controls with different behaviors
[Plunker](https://plnkr.co/edit/4hpqoFnI1hbdkLsbDPgi?p=preview)

For meeting requirements that do not align with typical HTML5 control behaviors.

## Radio

br-radio adds 2 new features to the radio control

1) Allows for a "not selected" value

2) Allows for different radio values to be saved to different locations

#### Normal Angular radio group:

    <input type="radio" class="br-radio" id="sex_male" name="sex" value="1" model="sex">
    <input type="radio" class="br-radio" id="sex_female" name="sex" value="2" model="sex">

Reports:

    sex=1
  or
  
    sex=2

#### br-radio group:

    <input type="radio" id="sex_male" name="sex" value="1" br-false-value="0" ng-model="sex_male">
    <input type="radio" id="sex_female" name="sex" value="1" br-false-value="0" ng-model="sex_female">

Reports: 

    sex_male=1
    sex_female=0
  or
  
    sex_male=0
    sex_female=1

## Checkbox

br-checkbox adds 1 new feature

1) Allows for ngFalseValue to be applied the first time the "activate" string evaluates to true or immediately if "activate" === undefined (instead of when a checkbox has been unchecked).


    <input type="checkbox" class="br-checkbox" activate="'true'" id="sex_male" name="sex" ng-true-value="1" ng-false-value="0" ng-model="sex_male">
    <input type="checkbox" class="br-checkbox" activate="'true" id="sex_female" name="sex" ng-true-value="1" ng-false-value="0" ng-model="sex_female">

