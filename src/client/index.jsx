var React = require("react/addons");
var Hello = require("./components/hello.jsx");
var pkg = require("../../package.json");

window.LiveReloadOptions = { host: "localhost" };
require('livereload-js');

React.render(
<Hello packageName={pkg.name} />,
	document.body
);
