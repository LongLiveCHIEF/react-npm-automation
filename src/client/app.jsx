var React = require("react");
var Reflux = require("reflux");
var pkg = require("../../package.json");

var packageStore = Reflux.createStore({
	data: {pkg},
	getInitialState: function(){
		return this.data;
	}
});

var App = React.createClass({
	mixins: [Reflux.connect(packageStore)],

	render: function (){
		return (
			<div>{this.state.pkg.name}</div>
		);
	}
	
});


module.exports = App;
