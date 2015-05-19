var React = require("react");
var Reflux = require("reflux");
var packageStore = require("./stores/packageStore");

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
