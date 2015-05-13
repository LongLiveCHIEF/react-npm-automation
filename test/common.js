var chai = require("chai");
global.expect = chai.expect;
global.sinon = require("sinon");

var sinonChai = require("sinon-chai");
chai.use(sinonChai);

global.React = require("react/addons");
global.React.test = global.React.addons.TestUtils;

require("./dom-helper");
require("./jsx-compiler");

var chaiJq = require("chai-jq");
chai.use(chaiJq);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
