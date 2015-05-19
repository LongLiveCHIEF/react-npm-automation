var React = require("react");
var Reflux = require("reflux");
var pkg = require("./stores/packageStore.jsx");
var mui = require("material-ui");
var {AppCanvas, AppBar} = mui;


var App = React.createClass({
	mixins: [Reflux.connect(pkg)],

	render: function (){
		return (
			<AppCanvas predefinedLayout={1}>
				<AppBar title={this.state.pkg.name} />
			</AppCanvas>
		);
	}
	
});


module.exports = App;
