var React = require("react/addons");
var Hello = require("./components/hello.jsx");
var Reflux = require("reflux");
var App = require("./app.jsx");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

window.LiveReloadOptions = { host: "localhost" };
require('livereload-js');

React.render(
<App />,
	document.body
);
