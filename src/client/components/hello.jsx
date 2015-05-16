var React = require("react/addons");
var mui = require("material-ui");
var Toolbar = mui.Toolbar;

// a simple mui layout to ensure setup is working

var Hello = React.createClass({
	getDefaultProps: function(){
		return {
			packageName: "React &amp; Flux NPM Automation"
		};
	},
	getInitialState: function(){
		return {
			packageName: "React &amp; Flux NPM Automation"
		};
	},
	render: function() {
		return (
			<Toolbar>
				{this.props.packageName}
			</Toolbar>
		);
	}
});

module.exports = Hello;
