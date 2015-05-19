var React = require("react");
var Reflux = require("reflux");
var pkg = require("./stores/packageStore.jsx");


var App = React.createClass({
	mixins: [Reflux.connect(pkg)],

	render: function (){
		return (
			<div>{this.state.pkg.name}</div>
		);
	}
	
});


module.exports = App;
