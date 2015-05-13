var domino = require("domino");
var Zepto = require("zepto-node");

global.window = domino.createWindow();
global.document = global.window.document;

global.$ = Zepto(global.window);

// Set the NODE_ENV so `render` can be called in node
process.env.NODE_ENV = "test";
