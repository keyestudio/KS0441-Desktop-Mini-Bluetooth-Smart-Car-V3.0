'use strict';

goog.provide('Blockly.Blocks.desktop_car');

goog.require('Blockly.Blocks');

//////////////////颜色/////////////////////
Blockly.Blocks.desktop_car.HUE = 200;


//////////////////////////////DEsktop_Car/////////////////////////////

////////////////////////////Desktop_Car////////////////
/*Blockly.Blocks.Desktop_Car = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["Front", "front"], ["Back", "back"],["Left", "left"],["Right", "right"]]), 'direction')
    this.appendDummyInput("")
    .appendField("Desktop_Car")
    .appendField(new Blockly.FieldImage("../../media/desktop_car/ke_TB6612.png", 43, 32))
    .appendField("speed(0~255):");
    this.appendValueInput("speed", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};*/

//////////////////LED////////////////
Blockly.Blocks.desk_led = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField("LED")
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_led.png", 43, 32));
    this.appendDummyInput("")
    .appendField(Blockly.Desk_on_off)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////////////////////front////////////////
Blockly.Blocks.FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_front)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32))
    .appendField(Blockly.Desk_speed);
    this.appendValueInput("speed_F", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////back////////////////
Blockly.Blocks.BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_back)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32))
    .appendField(Blockly.Desk_speed);
    this.appendValueInput("speed_B", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_left)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32))
    .appendField(Blockly.Desk_speed);
    this.appendValueInput("speed_L", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_left////////////////
Blockly.Blocks.TURN_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_turn_left)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_right)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32))
    .appendField(Blockly.Desk_speed);
    this.appendValueInput("speed_R", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_right////////////////
Blockly.Blocks.TURN_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_turn_right)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_stop)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_runing.png", 43, 32))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.desk_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_L_ir_a, "left"],[Blockly.Desk_R_ir_a, "right"]]), 'avoid02');
    this.appendDummyInput("")
    //.appendField("avoid")
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_ir_avoid.png", 43, 32));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////////超声波/////////////////////////
Blockly.Blocks.desk_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_sr01)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.desk_track = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_L_track, "track_left"],[Blockly.Desk_C_track, "track_center"],[Blockly.Desk_R_track, "track_right"]]), 'track');
    this.appendDummyInput("")
    //.appendField("track")
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_track.png", 60, 60));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.tone_notes = {
   init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.desk_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_buzzer)
    .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_buzzer.png", 70, 32));
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Desk_fre);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.desk_music = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Desk_play_music)
        .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_buzzer.png", 70, 32));
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_Ode_to_joy, "Ode to Joy"],[Blockly.Desk_birthday, "Birthday"]]), 'play');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.desk_notone={
init:function(){
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Desk_notone)
        .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_buzzer.png", 70, 32));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.desk_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.desktop_car.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.Desk_ir_R)
            .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_irr.png", 70, 32));
        this.appendStatementInput('DO')
            .appendField(Blockly.Desk_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.desk_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.desktop_car.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.Desk_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/desktop_car/desk_bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.Desk_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


//////////////////////////////DEsktop_Car/////////////////////////////
