
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

lockly.Blocks['action_single_tap'] = {
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


Blockly.Blocks['pixel_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Bitmap");
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
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['frame_strip_15'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start >>");
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
    this.appendDummyInput()
        .appendField("repeat <<");
    this.setInputsInline(true);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['logic_inline'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("If")
        .appendField(new Blockly.FieldDropdown([["chill","0"], ["shake it","1"], ["single tap","2"], ["double tap","3"]]), "If");
    this.appendDummyInput()
        .appendField("then");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.appendDummyInput()
        .appendField("wait")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["0.25","25"], ["0.5","50"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "wait");
    this.appendDummyInput()
        .appendField("sec");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
