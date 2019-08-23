/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
	toolbox : toolbox,
	collapse : true,
	comments : true,
	disable : false,
	maxBlocks : 500,
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
		startScale : 0.7,
		maxScale : 3,
		minScale : 0.2,
		scaleSpeed : 1.2

	}

};

/* Inject your workspace */
 	var workspace = Blockly.inject('blocklyDiv', options);





/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */
//var xml = '<xml><block type="frame_strip_15" deletable="true" movable="true"></block></xml>';
//Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);

// Load up the exp_start block when hitting the URL
Blockly.mainWorkspace.clear();
Blockly.mainWorkspace.addChangeListener(Blockly.Events.disableOrphans);
var xml = '<xml><block type="exp_start" deletable="true" movable="true"></block></xml>';  // add default block back
Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
renderContent();

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
