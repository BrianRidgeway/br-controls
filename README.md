# br-controls
AngularJS HTML5 Controls with different behaviors

For meeting requirements that do not align with typical HTML5 control behaviors.

## Radio
[Plunker](https://plnkr.co/edit/4hpqoFnI1hbdkLsbDPgi?p=preview)

br-radio adds 2 new features to the radio control

1) Allows for a "not selected" value

2) Allows for different radio values to be saved to different locations

#### Normal Angular radio group:

    <input type="radio" id="sex_male" name="sex" value="1" model="sex">
    <label for="sex_male">Male</label>
    <input type="radio" id="sex_female" name="sex" value="2" model="sex">
    <label for="sex_female">Feale</label>
    
Reports:

    sex=1
  or
  
    sex=2

#### br-radio group:

    <br-radio id="sex_male" name="sex" value="1" off-value="0" model="sex_male">
    <label for="sex_male">Male</label>
    <br-radio id="sex_female" name="sex" value="1" off-value="0" model="sex_female">
    <label for="sex_female">Female</label>
  
Reports: 

    sex_male=1
    sex_female=0
  or
  
    sex_male=0
    sex_female=1
