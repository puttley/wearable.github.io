
Blockly.Blocks['serial_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "Serial");
    this.appendDummyInput()
        .appendField("Serial Data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Blockly.Blocks['sense_left'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField("tilt")
//        .appendField(new Blockly.FieldImage("images/cube_left_tilt.PNG", 60, 60, "*"));
//    this.setOutput(true, null);
//    this.setColour(230);
// this.setTooltip("");
// this.setHelpUrl("");
//  }


//};

Blockly.Blocks['sense_shake'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cube shake detected")
        .appendField(new Blockly.FieldImage("images/shake.png", 50, 50, "cube shake"));
    this.setOutput(true, null);
    this.setColour("#0097A7");
 this.setTooltip("Value is TRUE when shaking Code Cube");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sense_tilt'] = {
  init: function() {
        var input = this.appendDummyInput()
        .appendField('cube tilting');
        var options = [
            [{'src': 'images/tilt_left.png', 'width': 50, 'height': 50, 'alt': 'left'}, '3'],
            [{'src': 'images/tilt_right.png', 'width': 50, 'height': 50, 'alt': 'right'}, '4'],
            [{'src': 'images/tilt_up.png', 'width': 50, 'height': 50, 'alt': 'forward'}, '2'],
            [{'src': 'images/tilt_down.png', 'width': 50, 'height': 50, 'alt': 'backward'}, '1']


        ];
        input.appendField(new Blockly.FieldDropdown(options), 'tilt');
    this.setOutput(true, null);
    this.setColour("#0097A7");
    this.setTooltip("Value is TRUE when Code Cube is tilted in selected direction");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sense_facing'] = {
  init: function() {
        var input = this.appendDummyInput()
        .appendField('cube facing');
        var options = [
            [{'src': 'images/face_up.png', 'width': 50, 'height': 50, 'alt': 'up'}, '5'],
            [{'src': 'images/face_down.png', 'width': 50, 'height': 50, 'alt': 'down'}, '6']

        ];
        input.appendField(new Blockly.FieldDropdown(options), 'facing');
    this.setOutput(true, null);
    this.setColour("#0097A7");
    this.setTooltip("Value is TRUE when Code Cube display matrix is facing the selected direction");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_show_image'] = {
  init: function() {
//    this.appendDummyInput()
        var input = this.appendDummyInput()
        .appendField("matrix image")
      //  .appendField(new Blockly.FieldImage("images/default.png", 25, 25, "matrix image"));
        var options = [
           [{'src': 'images/default.png', 'width': 50, 'height': 50, 'alt': 'smiling'}, '133'],
           [{'src': 'images/smiling.png', 'width': 50, 'height': 50, 'alt': 'smiling'}, '101'],
           [{'src': 'images/crying.png', 'width': 50, 'height': 50, 'alt': 'crying'}, '102'],
           [{'src': 'images/sad.png', 'width': 50, 'height': 50, 'alt': 'sad'}, '103'],
           [{'src': 'images/neutral.png', 'width': 50, 'height': 50, 'alt': 'neutral'}, '104'],
           [{'src': 'images/alligator.png', 'width': 50, 'height': 50, 'alt': 'alligator'}, '105'],
           [{'src': 'images/bird.png', 'width': 50, 'height': 50, 'alt': 'bird'}, '106'],
           [{'src': 'images/bug.png', 'width': 50, 'height': 50, 'alt': 'bug'}, '107'],
           [{'src': 'images/cat.png', 'width': 50, 'height': 50, 'alt': 'cat'}, '108'],
           [{'src': 'images/dog.png', 'width': 50, 'height': 50, 'alt': 'dog'}, '109'],
           [{'src': 'images/crab.png', 'width': 50, 'height': 50, 'alt': 'crab'}, '110'],
           [{'src': 'images/duck.png', 'width': 50, 'height': 50, 'alt': 'duck'}, '111'],
           [{'src': 'images/snake.png', 'width': 50, 'height': 50, 'alt': 'snake'}, '112'],
           [{'src': 'images/monster1.png', 'width': 50, 'height': 50, 'alt': 'monster1'}, '113'],
           [{'src': 'images/monster2.png', 'width': 50, 'height': 50, 'alt': 'monster2'}, '114'],
           [{'src': 'images/monster3.png', 'width': 50, 'height': 50, 'alt': 'monster3'}, '115'],
           [{'src': 'images/monster4.png', 'width': 50, 'height': 50, 'alt': 'monster4'}, '116'],
           [{'src': 'images/heart.png', 'width': 50, 'height': 50, 'alt': 'heart'}, '117'],
           [{'src': 'images/rainbow.png', 'width': 50, 'height': 50, 'alt': 'rainbow'}, '118'],
           [{'src': 'images/peace.png', 'width': 50, 'height': 50, 'alt': 'peace'}, '119'],
           [{'src': 'images/girl.png', 'width': 50, 'height': 50, 'alt': 'girl'}, '120'],
           [{'src': 'images/boy.png', 'width': 50, 'height': 50, 'alt': 'boy'}, '121'],
           [{'src': 'images/space_ship.png', 'width': 50, 'height': 50, 'alt': 'space_ship'}, '122'],
           [{'src': 'images/rocket.png', 'width': 50, 'height': 50, 'alt': 'rocket'}, '123'],
           [{'src': 'images/rock.png', 'width': 50, 'height': 50, 'alt': 'rock'}, '124'],
           [{'src': 'images/paper.png', 'width': 50, 'height': 50, 'alt': 'paper'}, '125'],
           [{'src': 'images/scissors.png', 'width': 50, 'height': 50, 'alt': 'scissors'}, '126'],
           [{'src': 'images/question.png', 'width': 50, 'height': 50, 'alt': 'question'}, '127'],
           [{'src': 'images/flag.png', 'width': 50, 'height': 50, 'alt': 'flag'}, '128'],
           [{'src': 'images/Arrow-Left.png', 'width': 50, 'height': 50, 'alt': 'left arrow'}, '129'],
           [{'src': 'images/Arrow-Right.png', 'width': 50, 'height': 50, 'alt': 'right arrow'}, '130'],
           [{'src': 'images/Arrow-Up.png', 'width': 50, 'height': 50, 'alt': 'up arrow'}, '131'],
           [{'src': 'images/Arrow-Down.png', 'width': 50, 'height': 50, 'alt': 'down arrow'}, '132'],
           [{'src': 'images/random-1.png', 'width': 50, 'height': 50, 'alt': 'random image'}, '134'],
        ];
        input.appendField(new Blockly.FieldDropdown(options), 'images');
//        .appendField(new Blockly.FieldDropdown([["heart","150"], ["purple bird","151"], ["smiley face","152"], ["frowny face","153"], ["cry face","154"], ["twitter","155"], ["crab","156"], ["figure","157"], ["random","158"]]), "images");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['matrix_bright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set brightness to")
        .appendField(new Blockly.FieldNumber(50, 0, 100, 1), "brightness")
        .appendField("percent %");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("scrolling mode")
        .appendField(new Blockly.FieldDropdown([["off","0"], ["on","1"]]), "NAME")
        .appendField("speed")
        .appendField(new Blockly.FieldDropdown([["slow","100"], ["medium","50"], ["fast","25"]]), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fill matrix with")
        .appendField(new Blockly.FieldColour("#66ffff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_fade'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fade matrix over")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "seconds")
        .appendField("second period");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_strobe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("strobe matrix color")
        .appendField(new Blockly.FieldColour("#33ff33"), "color")
        .appendField(new Blockly.FieldNumber(1, 1, 10, 1), "times")
        .appendField("times");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_flash'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blink matrix")
        .appendField(new Blockly.FieldNumber(1, 0, 10, 1), "times")
        .appendField("times");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }

};

Blockly.Blocks['matrix_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear matrix");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("matrix pixel at row")
        .appendField(new Blockly.FieldNumber(0, 1, 8, 1), "row")
        .appendField(", column")
        .appendField(new Blockly.FieldNumber(0, 1, 8, 1), "col")
        .appendField("with")
        .appendField(new Blockly.FieldColour("#ff99ff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("matrix row")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "row")
        .appendField("with")
        .appendField(new Blockly.FieldColour("#ff99ff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_column'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("matrix column")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "col")
        .appendField("with")
        .appendField(new Blockly.FieldColour("#ff99ff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("repeat")
        .appendField(new Blockly.FieldNumber(5, 1, 99, 1), "repeat");
    this.appendDummyInput()
        .appendField("times");
    this.appendStatementInput("repeat_loop")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(ev) {    // disallow nested loops - surround parent of 'x' type not allowed
    if (this.getSurroundParent() != null) {
      var block = this.getSurroundParent();
      if(block.type == 'exp_repeat') {this.unplug(true);}
    };
  }
};

Blockly.Blocks['exp_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blink display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#BA68C8");
 this.setTooltip("");
 this.setHelpUrl("");
 }
};

Blockly.Blocks['exp_character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("matrix character")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"],
                                               ["F","F"], ["G","G"], ["H","H"], ["I","I"], ["J","J"],
                                               ["K","K"], ["L","L"], ["M","M"], ["N","N"], ["O","O"],
                                               ["P","P"], ["Q","Q"], ["R","R"], ["S","S"], ["T","T"],
                                               ["U","U"], ["V","V"], ["W","W"], ["X","X"], ["Y","Y"], ["Z","Z"],
                                               ["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"],
                                               ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["random (0-9)","/"],]), "character")
        .appendField("color")
        .appendField(new Blockly.FieldColour("#3366ff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_if_block'] = {
  init: function() {
  this.appendValueInput("if")
      .setCheck(null)
      .appendField("if");
  this.appendDummyInput()
      .appendField("then");
  this.appendStatementInput("doBlocks")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#7B1FA2");
this.setTooltip("");
this.setHelpUrl("");

},
onchange: function(ev) {    // disallow nested loops - surround parent of 'x' type not allowed
 if (this.getSurroundParent() != null) {
   var block = this.getSurroundParent();
   if(block.type == 'cube_if_else') {this.unplug(true);}
   if(block.type == 'exp_if_block') {this.unplug(true);}
   if(block.type == 'exp_repeat') {this.unplug(true);}
   if(block.type == 'cube_loop_until') {this.unplug(true);}
   if(block.type == 'cube_loop_while') {this.unplug(true);}
  };
 }
};

Blockly.Blocks['cube_if_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if");
    this.appendValueInput("condition")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("then");
    this.appendStatementInput("then")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else");
    this.appendStatementInput("else")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
},
onchange: function(ev) {    // disallow nested loops - surround parent of 'x' type not allowed
 if (this.getSurroundParent() != null) {
   var block = this.getSurroundParent();
   if(block.type == 'cube_if_else') {this.unplug(true);}
   if(block.type == 'exp_if_block') {this.unplug(true);}
   if(block.type == 'exp_repeat') {this.unplug(true);}
   if(block.type == 'cube_loop_until') {this.unplug(true);}
   if(block.type == 'cube_loop_while') {this.unplug(true);}
  };
 }
};

Blockly.Blocks['cube_loop_until'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loop until");
    this.appendValueInput("condition")
        .setCheck(null);
    this.appendStatementInput("until")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
},
onchange: function(ev) {    // disallow nested loops - surround parent of 'x' type not allowed
 if (this.getSurroundParent() != null) {
   var block = this.getSurroundParent();
   if(block.type == 'cube_loop_until') {this.unplug(true);}
   if(block.type == 'cube_loop_while') {this.unplug(true);}
  };
 }
};

Blockly.Blocks['cube_loop_while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loop while");
   this.appendValueInput("condition")
        .setCheck(null);
    this.appendStatementInput("while")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
},
onchange: function(ev) {    // disallow nested loops - surround parent of 'x' type not allowed
 if (this.getSurroundParent() != null) {
   var block = this.getSurroundParent();
   if(block.type == 'cube_loop_while') {this.unplug(true);}
   if(block.type == 'cube_loop_until') {this.unplug(true);}
  };
 }
};

Blockly.Blocks['exp_tilt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cube tilting")
        .appendField(new Blockly.FieldDropdown([["left","3"], ["right","4"], ["front","1"], ["back","2"]]), "tilt");
    this.setOutput(true, null);
    this.setColour("#0097A7");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_is'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("matrix is facing")
        .appendField(new Blockly.FieldDropdown([["up (level)","5"], ["down (upside down)","6"]]), "is");
    this.setOutput(true, null);
    this.setColour("#0097A7");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pause for")
        .appendField(new Blockly.FieldDropdown([["0.1","100"], ["0.25","25"], ["0.5","50"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "seconds")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
 this.setFieldValue("1", "seconds");  // default check mark is 1 second
  }
};

Blockly.Blocks['exp_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for")
        .appendField(new Blockly.FieldDropdown([["shake","6"], ["no tilt (face up)","5"], ["tilting left","3"], ["tilting right","4"], ["tilting forward","1"], ["tilting backward","2"]]), "ACTION");
    this.appendStatementInput("doBlocks")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0288D1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cube_wait_until'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait until");
    this.appendValueInput("tilt")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_wait_for'] = {
  init: function() {
    this.appendValueInput("tilt")
        .setCheck(null)
        .appendField("wait until");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#0288D1");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_clear_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#BA68C8");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['exp_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on program start")
    //    .appendField(new Blockly.FieldImage("images/progress.gif", 15, 15, "*"));
        .appendField(new Blockly.FieldImage("images/start.gif", 25, 25, "*"));
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
 }
};

Blockly.Blocks['exp_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end program");
    this.setPreviousStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['new_blocks_tree'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new block column");
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play sound")
        .appendField(new Blockly.FieldDropdown([["space sound 1","1"],
                                                ["space sound 2","2"],
                                                ["siren","3"],
                                                ["phaser","4"],
                                                ["robot","5"],
                                                ["squeak","6"],
                                                ["waka waka","7"],
                                                ["slide up whistle","8"],
                                                ["slide down whistle","9"],
                                                ["oh !","10"],
                                                ["correct !","11"],
                                                ["try again...","12"],
                                                ["random tune","13"]]), "sounds")
        .appendField("until done");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#388E3C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/progress.gif", 15, 15, "*"))
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['exp_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play tone")
        .appendField(new Blockly.FieldNumber(1000, 100, 2500, 1), "hz")
        .appendField("Hz")
        .appendField("for")
        .appendField(new Blockly.FieldDropdown([["0.25","25"], ["0.5","50"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "duration")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#388E3C");
 this.setTooltip("");
 this.setHelpUrl("");
 this.setFieldValue("1", "duration");  // default check mark is 1 second
  }
};

Blockly.Blocks['exp_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play note")
        .appendField(new Blockly.FieldDropdown([["C3","1"], ["C#3","2"], ["D3","3"], ["D#3","4"], ["E3","5"], ["F3","6"], ["F#3","7"], ["G3","8"],
                                               ["G#3","9"], ["A3","10"], ["A#3","11"], ["B3","12"], ["C4","13"], ["C#4","14"], ["D4","15"], ["D#4","16"],
                                               ["E4","17"], ["F4","18"], ["F#4","19"], ["G4","20"], ["G#4","21"], ["A4","22"], ["A#4","23"], ["B4","24"], ["C5","25"],
                                               ["C#5","26"], ["D5","27"], ["D#5","28"], ["E5","29"], ["F5","30"], ["F#5","31"], ["G5","32"], ["G#5","33"], ["A5","34"],
                                               ["A#5","35"], ["B5","36"], ["C6","37"], ["C#6","38"], ["D6","39"], ["D#6","40"], ["E6","41"], ["F6","42"], ["F#6","43"], ["G6","44"],
                                               ["G#6","45"], ["A6","46"], ["A#6","47"], ["B6","48"], ["C7","49"], ["random note","50"]]), "sounds")
        .appendField("for")
        .appendField(new Blockly.FieldDropdown([["0.25","25"], ["0.5","50"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "duration")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#388E3C");
 this.setTooltip("");
 this.setHelpUrl("");
 this.setFieldValue("1", "duration");  // default check mark is 1 second
  }
};

Blockly.Blocks['pixel_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("create image")
   this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 8")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 7")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 6")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 5")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 4")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 3")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 2")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 1");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 16")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 15")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 14")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 13")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 12")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 11")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 10")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 9");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 24")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 23")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 22")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 21")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 20")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 19")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 18")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 17");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 32")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 31")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 30")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 29")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 28")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 27")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 26")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 25");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 40")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 39")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 38")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 37")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 36")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 35")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 34")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 33");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 48")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 47")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 46")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 45")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 44")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 43")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 42")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 41");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 56")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 55")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 54")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 53")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 52")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 51")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 50")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 49");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 64")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 63")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 62")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 61")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 60")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 59")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 58")
        .appendField(new Blockly.FieldColour("#000000"), "PIXEL 57");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#78909C");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['frame_strip_15'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start when");
    this.appendStatementInput("start")
        .setCheck(null);
    this.appendValueInput("frame1")
        .setCheck(null)
        .appendField("1");
    this.appendValueInput("frame2")
        .setCheck(null)
        .appendField("2");
    this.appendValueInput("frame3")
        .setCheck(null)
        .appendField("3");
    this.appendValueInput("frame4")
        .setCheck(null)
        .appendField("4");
    this.appendValueInput("frame5")
        .setCheck(null)
        .appendField("5");
    this.appendValueInput("frame6")
        .setCheck(null)
        .appendField("6");
    this.appendValueInput("frame7")
        .setCheck(null)
        .appendField("7");
    this.appendValueInput("frame8")
        .setCheck(null)
        .appendField("8");
    this.appendValueInput("frame9")
        .setCheck(null)
        .appendField("9");
    this.appendValueInput("frame10")
        .setCheck(null)
        .appendField("10");
    this.appendValueInput("frame11")
        .setCheck(null)
        .appendField("11");
    this.appendValueInput("frame12")
        .setCheck(null)
        .appendField("12");
    this.appendValueInput("frame13")
        .setCheck(null)
        .appendField("13");
    this.appendValueInput("frame14")
        .setCheck(null)
        .appendField("14");
    this.appendValueInput("frame15")
        .setCheck(null)
        .appendField("15");
    this.setInputsInline(true);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wear_logic'] = {
  init: function() {
    this.appendStatementInput("action")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("action");
    this.appendStatementInput("do")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("do");
    this.appendStatementInput("pause")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pause");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['just_go_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("just go");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tilt_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tilt left");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tilt_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tilt right");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tilt_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tilt up");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tilt_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tilt down");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['no_tilt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("no tilt (level)");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_shake'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if shake");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_025_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0.25 seconds");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_05_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0.5 seconds");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_1_second'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1 second");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_2_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("2 seconds");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_3_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3 seconds");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_4_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4 seconds");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait_5_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("5 seconds");
    this.setPreviousStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['image_logic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for ")
        .appendField(new Blockly.FieldDropdown([["0 sec","0"], ["0.25 sec","25"], ["0.5 sec","50"], ["1 sec","1"], ["2 sec","2"], ["3 sec","3"], ["4 sec","4"], ["5 sec","5"], ["single tap","6"], ["double tap","7"], ["shake","8"], ["jump","9"]]), "condition")
        .appendField("then");
    this.appendStatementInput("image")
        .setCheck(null)
        .appendField("do");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['action_single_tap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("single tap");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['action_double_tap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("double tap");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['action_shake_it'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("shake it");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['action_jump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("jump");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['action_spin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("spin");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_025'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0.25 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1 second");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("2 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("5 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['image_logic_1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("wait for");
    this.appendDummyInput()
        .appendField("then");
    this.appendStatementInput("image")
        .setCheck(null)
        .appendField("do");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause_05'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0.5 seconds");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['image_logic_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldDropdown([["single tap","6"], ["double tap","7"], ["shake","8"], ["jump","9"]]), "condition")
        .appendField("then");
    this.appendStatementInput("image")
        .setCheck(null)
        .appendField("do");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
