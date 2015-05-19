var React = require("react/addons");
var Hello = require("./components/hello.jsx");
var pkg = require("../../package.json");
var Reflux = require("reflux");

window.LiveReloadOptions = { host: "localhost" };
require('livereload-js');

var packageStore = Reflux.createStore({
	data: {pkg},
	getInitialState: function(){
		return this.data;
	}
});

var App = React.createClass({

	mixins: [Reflux.connect(packageStore)],
	render: function(){
		return (
			<div>Package Name: {this.state.pkg.name} </div>
		);
	}
});

React.render(
<App />,
	document.body
);
