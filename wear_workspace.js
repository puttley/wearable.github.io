/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
	toolbox : toolbox,
	collapse : true,
	comments : true,
	disable : false,
	maxBlocks : 61,
	trashcan : true,
	horizontalLayout : false,
	toolboxPosition : 'start',
	css : true,
	media : 'https://blockly-demo.appspot.com/static/media/',
	rtl : false,
	scrollbars : true,
	sounds : true,
	oneBasedIndex : true,
	zoom : {
		controls : true,
		wheel : true,
		startScale : 0.9,
		maxScale : 3,
		minScale : 0.3,
		scaleSpeed : 1.2
	}

};

/* Inject your workspace */
// var workspace = Blockly.inject('blocklyDiv', options);


  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv,
      {toolbox: document.getElementById('toolbox')});
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);



/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */
//var xml = '<xml><block type="frame_strip_15" deletable="true" movable="true"></block></xml>';
//Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);

// Load up the exp_start block when hitting the URL
Blockly.mainWorkspace.clear();
var xml = '<xml><block type="exp_start" deletable="true" movable="true"></block></xml>';  // add default block back
Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
renderContent();

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
