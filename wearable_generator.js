
Blockly.JavaScript['serial_data'] = function(block) {
  var text_serial = block.getFieldValue('Serial');
  // TODO: Assemble JavaScript into code variable.
  var code = text_serial;
  return code;
};

Blockly.JavaScript['exp_repeat'] = function(block) {
  var dropdown_times = block.getFieldValue('times');
  var statements_repeat_loop = Blockly.JavaScript.statementToCode(block, 'repeat_loop');
  // TODO: Assemble JavaScript into code variable.
  var code = 253 + ',' + dropdown_times + ',' + statements_repeat_loop + ',' + 127 + ',';
  return code;
};

Blockly.JavaScript['exp_blink'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 252 + ',';
  return code;
};

Blockly.JavaScript['exp_delay'] = function(block) {
  var dropdown_seconds = block.getFieldValue('seconds');
  // TODO: Assemble JavaScript into code variable.
  var code = 251 + ',' + dropdown_seconds + ',';
  return code;
};

Blockly.JavaScript['exp_show_image'] = function(block) {
  var dropdown_images = block.getFieldValue('images');
  // TODO: Assemble JavaScript into code variable.
  var code = 247 + ',' + dropdown_images + ',' + 0 + ','; // zero is a dummy
  return code;
};

Blockly.JavaScript['exp_character'] = function(block) {
  var dropdown_character = block.getFieldValue('character');
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = 249 + ',' + dropdown_character.charCodeAt(0) + ',' + pickycolor(colour_color);
  return code;
};

Blockly.JavaScript['exp_if_block'] = function(block) {
  var dropdown_action = block.getFieldValue('ACTION');
  var statements_doblocks = Blockly.JavaScript.statementToCode(block, 'doBlocks');
  // TODO: Assemble JavaScript into code variable.
  var code = 254 + ',' + dropdown_action + ',' + statements_doblocks + ',' + 128 + ',';
  return code;
};

Blockly.JavaScript['exp_wait'] = function(block) {
  var dropdown_action = block.getFieldValue('ACTION');
  var statements_doblocks = Blockly.JavaScript.statementToCode(block, 'doBlocks');
  // TODO: Assemble JavaScript into code variable.
  var code = 244 + ',' + dropdown_action + ',' + statements_doblocks + ',' + 128 + ',';
  return code;
};

Blockly.JavaScript['exp_clear_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 248 + ',';
  return code;
};

Blockly.JavaScript['exp_start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(' + ',';
  return code;
};

Blockly.JavaScript['exp_end'] = function(block) {
  var checkbox_repeat = block.getFieldValue('repeat') == 'TRUE';
  if(checkbox_repeat == 'TRUE') {var code = ')' + ',' + 1;}
  if(checkbox_repeat == 'FALSE'){var code = ')' + ',' + 0;}
  return code;
};

Blockly.JavaScript['exp_sound'] = function(block) {
  var dropdown_sounds = block.getFieldValue('sounds');
  // TODO: Assemble JavaScript into code variable.
  var code = 245 + ',' + dropdown_sounds + ',';
  return code;
};

Blockly.JavaScript['exp_tone'] = function(block) {
  var text_hz = block.getFieldValue('hz');
  // TODO: Assemble JavaScript into code variable.
  var code = 246 + ',' + (text_hz / 10) + ',';
  return code;
};

Blockly.JavaScript['exp_note'] = function(block) {
  var dropdown_sounds = block.getFieldValue('sounds');
  var dropdown_duration = block.getFieldValue('duration');
  // TODO: Assemble JavaScript into code variable.
  var code = 246 + ',' + dropdown_sounds + ',' + dropdown_duration + ',';
  return code;
};

Blockly.JavaScript['pixel_matrix'] = function(block) {
  var colour_pixel_8 = block.getFieldValue('PIXEL 8');
  var colour_pixel_7 = block.getFieldValue('PIXEL 7');
  var colour_pixel_6 = block.getFieldValue('PIXEL 6');
  var colour_pixel_5 = block.getFieldValue('PIXEL 5');
  var colour_pixel_4 = block.getFieldValue('PIXEL 4');
  var colour_pixel_3 = block.getFieldValue('PIXEL 3');
  var colour_pixel_2 = block.getFieldValue('PIXEL 2');
  var colour_pixel_1 = block.getFieldValue('PIXEL 1');
  var colour_pixel_16 = block.getFieldValue('PIXEL 16');
  var colour_pixel_15 = block.getFieldValue('PIXEL 15');
  var colour_pixel_14 = block.getFieldValue('PIXEL 14');
  var colour_pixel_13 = block.getFieldValue('PIXEL 13');
  var colour_pixel_12 = block.getFieldValue('PIXEL 12');
  var colour_pixel_11 = block.getFieldValue('PIXEL 11');
  var colour_pixel_10 = block.getFieldValue('PIXEL 10');
  var colour_pixel_9 = block.getFieldValue('PIXEL 9');
  var colour_pixel_24 = block.getFieldValue('PIXEL 24');
  var colour_pixel_23 = block.getFieldValue('PIXEL 23');
  var colour_pixel_22 = block.getFieldValue('PIXEL 22');
  var colour_pixel_21 = block.getFieldValue('PIXEL 21');
  var colour_pixel_20 = block.getFieldValue('PIXEL 20');
  var colour_pixel_19 = block.getFieldValue('PIXEL 19');
  var colour_pixel_18 = block.getFieldValue('PIXEL 18');
  var colour_pixel_17 = block.getFieldValue('PIXEL 17');
  var colour_pixel_32 = block.getFieldValue('PIXEL 32');
  var colour_pixel_31 = block.getFieldValue('PIXEL 31');
  var colour_pixel_30 = block.getFieldValue('PIXEL 30');
  var colour_pixel_29 = block.getFieldValue('PIXEL 29');
  var colour_pixel_28 = block.getFieldValue('PIXEL 28');
  var colour_pixel_27 = block.getFieldValue('PIXEL 27');
  var colour_pixel_26 = block.getFieldValue('PIXEL 26');
  var colour_pixel_25 = block.getFieldValue('PIXEL 25');
  var colour_pixel_40 = block.getFieldValue('PIXEL 40');
  var colour_pixel_39 = block.getFieldValue('PIXEL 39');
  var colour_pixel_38 = block.getFieldValue('PIXEL 38');
  var colour_pixel_37 = block.getFieldValue('PIXEL 37');
  var colour_pixel_36 = block.getFieldValue('PIXEL 36');
  var colour_pixel_35 = block.getFieldValue('PIXEL 35');
  var colour_pixel_34 = block.getFieldValue('PIXEL 34');
  var colour_pixel_33 = block.getFieldValue('PIXEL 33');
  var colour_pixel_48 = block.getFieldValue('PIXEL 48');
  var colour_pixel_47 = block.getFieldValue('PIXEL 47');
  var colour_pixel_46 = block.getFieldValue('PIXEL 46');
  var colour_pixel_45 = block.getFieldValue('PIXEL 45');
  var colour_pixel_44 = block.getFieldValue('PIXEL 44');
  var colour_pixel_43 = block.getFieldValue('PIXEL 43');
  var colour_pixel_42 = block.getFieldValue('PIXEL 42');
  var colour_pixel_41 = block.getFieldValue('PIXEL 41');
  var colour_pixel_56 = block.getFieldValue('PIXEL 56');
  var colour_pixel_55 = block.getFieldValue('PIXEL 55');
  var colour_pixel_54 = block.getFieldValue('PIXEL 54');
  var colour_pixel_53 = block.getFieldValue('PIXEL 53');
  var colour_pixel_52 = block.getFieldValue('PIXEL 52');
  var colour_pixel_51 = block.getFieldValue('PIXEL 51');
  var colour_pixel_50 = block.getFieldValue('PIXEL 50');
  var colour_pixel_49 = block.getFieldValue('PIXEL 49');
  var colour_pixel_64 = block.getFieldValue('PIXEL 64');
  var colour_pixel_63 = block.getFieldValue('PIXEL 63');
  var colour_pixel_62 = block.getFieldValue('PIXEL 62');
  var colour_pixel_61 = block.getFieldValue('PIXEL 61');
  var colour_pixel_60 = block.getFieldValue('PIXEL 60');
  var colour_pixel_59 = block.getFieldValue('PIXEL 59');
  var colour_pixel_58 = block.getFieldValue('PIXEL 58');
  var colour_pixel_57 = block.getFieldValue('PIXEL 57');

  var code = 250 + ',' + pickycolor(colour_pixel_1) + pickycolor(colour_pixel_2) + pickycolor(colour_pixel_3) + pickycolor(colour_pixel_4) + pickycolor(colour_pixel_5) + pickycolor(colour_pixel_6) + pickycolor(colour_pixel_7) + pickycolor(colour_pixel_8) +
    pickycolor(colour_pixel_9) + pickycolor(colour_pixel_10) + pickycolor(colour_pixel_11) + pickycolor(colour_pixel_12) + pickycolor(colour_pixel_13) + pickycolor(colour_pixel_14) + pickycolor(colour_pixel_15) + pickycolor(colour_pixel_16) +
    pickycolor(colour_pixel_17) + pickycolor(colour_pixel_18) + pickycolor(colour_pixel_19) + pickycolor(colour_pixel_20) + pickycolor(colour_pixel_21) + pickycolor(colour_pixel_22) + pickycolor(colour_pixel_23) + pickycolor(colour_pixel_24) +
    pickycolor(colour_pixel_25) + pickycolor(colour_pixel_26) + pickycolor(colour_pixel_27) + pickycolor(colour_pixel_28) + pickycolor(colour_pixel_29) + pickycolor(colour_pixel_30) + pickycolor(colour_pixel_31) + pickycolor(colour_pixel_32) +
    pickycolor(colour_pixel_33) + pickycolor(colour_pixel_34) + pickycolor(colour_pixel_35) + pickycolor(colour_pixel_36) + pickycolor(colour_pixel_37) + pickycolor(colour_pixel_38) + pickycolor(colour_pixel_39) + pickycolor(colour_pixel_40) +
    pickycolor(colour_pixel_41) + pickycolor(colour_pixel_42) + pickycolor(colour_pixel_43) + pickycolor(colour_pixel_44) + pickycolor(colour_pixel_45) + pickycolor(colour_pixel_46) + pickycolor(colour_pixel_47) + pickycolor(colour_pixel_48) +
    pickycolor(colour_pixel_49) + pickycolor(colour_pixel_50) + pickycolor(colour_pixel_51) + pickycolor(colour_pixel_52) + pickycolor(colour_pixel_53) + pickycolor(colour_pixel_54) + pickycolor(colour_pixel_55) + pickycolor(colour_pixel_56) +
    pickycolor(colour_pixel_57) + pickycolor(colour_pixel_58) + pickycolor(colour_pixel_59) + pickycolor(colour_pixel_60) + pickycolor(colour_pixel_61) + pickycolor(colour_pixel_62) + pickycolor(colour_pixel_63) + pickycolor(colour_pixel_64);


  return code;
};

// function to return an integer to the code serial string matched to the pixel color
function pickycolor(color){
  if(color == '#000000'){var code = 0 + ","; return code;}  // black
  if(color == '#cccccc'){var code = 1 + ","; return code;}
  if(color == '#c0c0c0'){var code = 2 + ","; return code;}
  if(color == '#999999'){var code = 3 + ","; return code;}
  if(color == '#666666'){var code = 4 + ","; return code;}
  if(color == '#333333'){var code = 5 + ","; return code;}
  if(color == '#ffffff'){var code = 6 + ","; return code;}  // white
  if(color == '#ffcccc'){var code = 7 + ","; return code;}
  if(color == '#ff6666'){var code = 8 + ","; return code;}
  if(color == '#ff0000'){var code = 9 + ","; return code;}
  if(color == '#cc0000'){var code = 10 + ","; return code;}
  if(color == '#990000'){var code = 11 + ","; return code;}
  if(color == '#660000'){var code = 12 + ","; return code;}
  if(color == '#330000'){var code = 13 + ","; return code;}
  if(color == '#ffcc99'){var code = 14 + ","; return code;}
  if(color == '#ff9966'){var code = 15 + ","; return code;}
  if(color == '#ff9900'){var code = 16 + ","; return code;}
  if(color == '#ff6600'){var code = 17 + ","; return code;}
  if(color == '#cc6600'){var code = 18 + ","; return code;}
  if(color == '#993300'){var code = 19 + ","; return code;}
  if(color == '#663300'){var code = 20 + ","; return code;}
  if(color == '#ffff99'){var code = 21 + ","; return code;}
  if(color == '#ffff66'){var code = 22 + ","; return code;}
  if(color == '#ffcc66'){var code = 23 + ","; return code;}
  if(color == '#ffcc33'){var code = 24 + ","; return code;}
  if(color == '#cc9933'){var code = 25 + ","; return code;}
  if(color == '#996633'){var code = 26 + ","; return code;}
  if(color == '#663333'){var code = 27 + ","; return code;}
  if(color == '#ffffcc'){var code = 28 + ","; return code;}
  if(color == '#ffff33'){var code = 29 + ","; return code;}
  if(color == '#ffff00'){var code = 30 + ","; return code;}
  if(color == '#ffcc00'){var code = 31 + ","; return code;}
  if(color == '#999900'){var code = 32 + ","; return code;}
  if(color == '#666600'){var code = 33 + ","; return code;}
  if(color == '#333300'){var code = 34 + ","; return code;}
  if(color == '#99ff99'){var code = 35 + ","; return code;}
  if(color == '#66ff99'){var code = 36 + ","; return code;}
  if(color == '#33ff33'){var code = 37 + ","; return code;}
  if(color == '#33cc00'){var code = 38 + ","; return code;}
  if(color == '#009900'){var code = 39 + ","; return code;}
  if(color == '#006600'){var code = 40 + ","; return code;}
  if(color == '#003300'){var code = 41 + ","; return code;}
  if(color == '#99ffff'){var code = 42 + ","; return code;}
  if(color == '#33ffff'){var code = 43 + ","; return code;}
  if(color == '#66cccc'){var code = 44 + ","; return code;}
  if(color == '#00cccc'){var code = 45 + ","; return code;}
  if(color == '#339999'){var code = 46 + ","; return code;}
  if(color == '#336666'){var code = 47 + ","; return code;}
  if(color == '#003333'){var code = 48 + ","; return code;}
  if(color == '#ccffff'){var code = 49 + ","; return code;}
  if(color == '#66ffff'){var code = 50 + ","; return code;}
  if(color == '#33ccff'){var code = 51 + ","; return code;}
  if(color == '#3366ff'){var code = 52 + ","; return code;}
  if(color == '#3333ff'){var code = 53 + ","; return code;}
  if(color == '#000099'){var code = 54 + ","; return code;}
  if(color == '#000066'){var code = 55 + ","; return code;}
  if(color == '#ccccff'){var code = 56 + ","; return code;}
  if(color == '#9999ff'){var code = 57 + ","; return code;}
  if(color == '#6666cc'){var code = 58 + ","; return code;}
  if(color == '#6633ff'){var code = 59 + ","; return code;}
  if(color == '#6600cc'){var code = 60 + ","; return code;}
  if(color == '#333399'){var code = 61 + ","; return code;}
  if(color == '#330099'){var code = 62 + ","; return code;}
  if(color == '#ffccff'){var code = 63 + ","; return code;}
  if(color == '#ff99ff'){var code = 64 + ","; return code;}
  if(color == '#cc66cc'){var code = 65 + ","; return code;}
  if(color == '#cc33cc'){var code = 66 + ","; return code;}
  if(color == '#993399'){var code = 67 + ","; return code;}
  if(color == '#663366'){var code = 68 + ","; return code;}
  if(color == '#330033'){var code = 69 + ","; return code;}
}

Blockly.JavaScript['frame_strip_15'] = function(block) {
  var statements_start = Blockly.JavaScript.statementToCode(block, 'start');
  var value_frame1 = Blockly.JavaScript.valueToCode(block, 'frame1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame2 = Blockly.JavaScript.valueToCode(block, 'frame2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame3 = Blockly.JavaScript.valueToCode(block, 'frame3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame4 = Blockly.JavaScript.valueToCode(block, 'frame4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame5 = Blockly.JavaScript.valueToCode(block, 'frame5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame6 = Blockly.JavaScript.valueToCode(block, 'frame6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame7 = Blockly.JavaScript.valueToCode(block, 'frame7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame8 = Blockly.JavaScript.valueToCode(block, 'frame8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame9 = Blockly.JavaScript.valueToCode(block, 'frame9', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame10 = Blockly.JavaScript.valueToCode(block, 'frame10', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame11 = Blockly.JavaScript.valueToCode(block, 'frame11', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame12 = Blockly.JavaScript.valueToCode(block, 'frame12', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame13 = Blockly.JavaScript.valueToCode(block, 'frame13', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame14 = Blockly.JavaScript.valueToCode(block, 'frame14', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame15 = Blockly.JavaScript.valueToCode(block, 'frame15', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "{" + value_frame1 + value_frame2 + value_frame3 + value_frame4 + value_frame5 + value_frame6 + value_frame7 + value_frame8 +
             value_frame9 + value_frame10 +  value_frame11 + value_frame12 + value_frame13 + value_frame14 + value_frame15;
  return code;

};

Blockly.JavaScript['wear_logic'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var statements_pause = Blockly.JavaScript.statementToCode(block, 'pause');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_do + statements_action + statements_pause;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['just_go_statement'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 0 + ',';
  return code;
};

Blockly.JavaScript['tilt_up'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 1 + ',';
  return code;
};

Blockly.JavaScript['tilt_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 2 + ',';
  return code;
};

Blockly.JavaScript['tilt_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 3 + ',';
  return code;
};

Blockly.JavaScript['tilt_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 4 + ',';
  return code;
};

Blockly.JavaScript['no_tilt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 5 + ',';
  return code;
};

Blockly.JavaScript['if_shake'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 6 + ',';
  return code;
};

Blockly.JavaScript['wait_025_seconds'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 25 + ',';
  return code;
};

Blockly.JavaScript['wait_05_seconds'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 50 + ',';
  return code;
};

Blockly.JavaScript['wait_1_second'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 1 + ',';
  return code;
};

Blockly.JavaScript['wait_2_seconds'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 2 + ',';
  return code;
};

Blockly.JavaScript['wait_3_seconds'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 3 + ',';
  return code;
};

Blockly.JavaScript['wait_4_seconds'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 4 + ',';
  return code;
};

Blockly.JavaScript['wait_5_seconds'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 5 + ',';
  return code;
};


Blockly.JavaScript['image_logic'] = function(block) {
  var dropdown_condition = block.getFieldValue('condition');
  var statements_image = Blockly.JavaScript.statementToCode(block, 'image');
  var code = statements_image + dropdown_condition;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['image_logic_1'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_image = Blockly.JavaScript.statementToCode(block, 'image');
  var code = statements_image + value_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['image_logic_if'] = function(block) {
  var dropdown_condition = block.getFieldValue('condition');
  var statements_image = Blockly.JavaScript.statementToCode(block, 'image');
  var code = statements_image + dropdown_condition;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['action_single_tap'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 6 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['action_double_tap'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 7 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['action_shake_it'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 8 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['action_jump'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 9 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['action_spin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_0'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 0 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_025'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 25 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['pause_05'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 50 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 1 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 2 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 3 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_4'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 4 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pause_5'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 5 + ',';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
