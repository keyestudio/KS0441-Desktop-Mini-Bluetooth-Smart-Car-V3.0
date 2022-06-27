'use strict';

goog.provide('Blockly.Arduino.desktop-car');

goog.require('Blockly.Arduino');

/////////////////////////led///////////////////////
Blockly.Arduino.desk_led = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_led'] = 'pinMode(3, OUTPUT);';
  var code = 'digitalWrite(3,'+dropdown_stat+');\n'
  return code;
};


////////////////////////////////ks0441_MOTOR_START//////////////////////////
Blockly.Arduino.KS0441_START = function() {
  //Blockly.Arduino.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(5, OUTPUT);\n  pinMode(2, OUTPUT);\n  pinMode(9, OUTPUT);';
  var code = '  pinMode(4, OUTPUT);\npinMode(5, OUTPUT);\npinMode(2, OUTPUT);\npinMode(9, OUTPUT);\n\npinMode(A0,INPUT);\npinMode(A2,INPUT);\n';
  return code;
};

////////////////////////////////Desktop_Car//////////////////////////
Blockly.Arduino.Desktop_Car = function() {
  
  var value_speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var dropdown_type = this.getFieldValue('direction');

  Blockly.Arduino.definitions_['front'] = 'void front() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_speed+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_speed+');\n}\n';
  Blockly.Arduino.definitions_['back'] = 'void back() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_speed+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_speed+');\n}\n';

  var code = '';
  if (dropdown_type == "front") code += 'front();';
  if (dropdown_type == "back") code += 'back();';
  if (dropdown_type == "left") code += 'left();';
  if (dropdown_type == "right") code += 'right();';

  //Blockly.Arduino.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
   //var code = '  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_front+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_front+');'; 
  return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.FRONT = function() {
  
  var value_front = Blockly.Arduino.valueToCode(this, 'speed_F', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';

   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_front+');\ndigitalWrite(2,HIGH);\nanalogWrite(9,'+value_front+');\n'; 
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.BACK = function() {
  
  var value_back = Blockly.Arduino.valueToCode(this, 'speed_B', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_back+');\ndigitalWrite(2,LOW);\nanalogWrite(9,'+value_back+');\n'; 
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.LEFT = function() {
  
  var value_left = Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_left+');\ndigitalWrite(2,HIGH);\nanalogWrite(9,'+value_left+');\n'; 
  return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.TURN_LEFT = function() {
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(9,180);\n'; 
  return code;
};


////////////////////////////////right//////////////////////////
Blockly.Arduino.RIGHT = function() {
  
  var value_right = Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_right+');\ndigitalWrite(2,LOW);\nanalogWrite(9,'+value_right+');\n'; 
  return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.TURN_RIGHT = function() {
  
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(9,100);\n'; 
  return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.STOP = function() {
  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(9, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(9,0);\n'; 
  return code;
};

//////////////////////////红外避障///////////////////////////
Blockly.Arduino.desk_avoid = function() {
  var dropdown_type = this.getFieldValue('avoid02');
  Blockly.Arduino.setups_['setup_output_left'] = 'pinMode(A0, INPUT);';
  Blockly.Arduino.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

  var code = '';
  if (dropdown_type == "left") code += 'digitalRead(A0)';
  if (dropdown_type == "right") code += 'digitalRead(A2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////////desk超声波//////////////////////
Blockly.Arduino.desk_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(12, LOW);\n'
  + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.desk_track = function() {
  var dropdown_type = this.getFieldValue('track');
  Blockly.Arduino.setups_['setup_output_trackleft'] = 'pinMode(6, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

  var code = '';
  if (dropdown_type == "track_left") code += 'digitalRead(6)';
  if (dropdown_type == "track_center") code += 'digitalRead(7)';
  if (dropdown_type == "track_right") code += 'digitalRead(8)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

////////////////////蜂鸣器//////////////////////
Blockly.Arduino.tone_notes = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.desk_buzzer=function(){
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.setups_['setup_output_11'] = 'pinMode(11, OUTPUT);';
   var code = ""; 
   /*if(window.isNaN(dropdown_pin)){
      code = code+'pinMode(11, OUTPUT);\n';
   }else{
      Blockly.Arduino.setups_['setup_output_11'] = 'pinMode(11, OUTPUT);';
   }*/
   code += "tone(11,"+fre+");\n";
   return code;
};

//////////////////////////music///////////////////////////
Blockly.Arduino.desk_music = function() {
  Blockly.Arduino.setups_['setup_output_music'] = 'pinMode(11, OUTPUT);';
  Blockly.Arduino.definitions_['include_birthday'] = 'void birthday()\n{\n  tone(11,294);\n  delay(250);\n  tone(11,440);\n  delay(250);\n  tone(11,392);\n  delay(250);\n  tone(11,532);\n  delay(250);\n  tone(11,494);\n  delay(500);\n  tone(11,392);\n  delay(250);\n  tone(11,440);\n  delay(250);\n  tone(11,392);\n  delay(250);\n  tone(11,587);\n  delay(250);\n  tone(11,532);\n  delay(500);\n  tone(11,392);\n  delay(250);\n  tone(11,784);\n  delay(250);\n  tone(11,659);\n  delay(250);\n  tone(11,532);\n  delay(250);\n  tone(11,494);\n  delay(250);\n  tone(11,440);\n  delay(250);\n  tone(11,698);\n  delay(375);\n  tone(11,659);\n  delay(250);\n  tone(11,532);\n  delay(250);\n  tone(11,587);\n  delay(250);\n  tone(11,532);\n  delay(500);\n}\n';
  Blockly.Arduino.definitions_['include_tone'] = '//tone\n#define D0 -1\n#define D1 262\n#define D2 293\n#define D3 329\n#define D4 349\n#define D5 392\n#define D6 440\n#define D7 494\n#define M1 523\n#define M2 586\n#define M3 658\n#define M4 697\n#define M5 783\n#define M6 879\n#define M7 987\n#define H1 1045\n#define H2 1171\n#define H3 1316\n#define H4 1393\n#define H5 1563\n#define H6 1755\n#define H7 1971\n\n#define WHOLE 1\n#define HALF 0.5\n#define QUARTER 0.25\n#define EIGHTH 0.25\n#define SIXTEENTH 0.625\n ';
  
  Blockly.Arduino.definitions_['include_tune'] = '\nint tune[]= \n{\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M3,M2,M2,\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1,\n  M2,M2,M3,M1,\n  M2,M3,M4,M3,M1,\n  M2,M3,M4,M3,M2,\n  M1,M2,D5,D0,\n  M3,M3,M4,M5,\n  M5,M4,M3,M4,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1\n};';
  Blockly.Arduino.definitions_['include_durt'] = '\nfloat durt[]= \n {\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,0.5,0.5,1,1,\n  1,0.5,0.5,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,0.5,0.5,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n };';
  Blockly.Arduino.definitions_['include_io1'] = '\n int length;\n int tonepin=11; \n';
  Blockly.Arduino.definitions_['include_Ode_to_Joy'] = 'void Ode_to_Joy()\n{\n  for(int x=0;x<length;x++)\n  {\n    tone(tonepin,tune[x]);\n    delay(300*durt[x]);   \n  }\n}\n';

  Blockly.Arduino.setups_['setup_output_Ode'] = 'length=sizeof(tune)/sizeof(tune[0]);\n';
  var dropdown_type = this.getFieldValue('play');
  
  var code = '';
  if (dropdown_type == "Birthday") code += 'birthday();\n';
  if (dropdown_type == "Ode to Joy") code += 'Ode_to_Joy();\n';
  //if (dropdown_type == "City of Sky") code += 'digitalRead(8)';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.desk_notone=function(){
   //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['setup_output'] = 'pinMode(11, OUTPUT);';
   var code='';
   code += "noTone(11);\n";
   return code;
};

//////////////////music/////////////////////////



///////////////////////红外接收///////////////////
Blockly.Arduino.desk_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['var_ir_recv_A1'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    Blockly.Arduino.setups_['setup_ir_recv_A1'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.desk_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['char'] = 'char '+val+';\n';

  Blockly.Arduino.setups_['mySerial23'] = 'Serial.begin(9600);';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};

///////////////////////////////Desktop_Car/////////////////////////////////////////////////
