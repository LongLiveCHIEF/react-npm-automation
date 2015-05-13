var React = require("react/addons");
var Hello = require("./hello.jsx");
var pkg = require("../src/client/package.json");

React.render(
<Hello packageName={pkg.name} />,
	document.getElementById("example")
);
