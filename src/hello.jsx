var React = require('react/addons');


// simple component to ensure setup is working

var Hello = React.createClass({
	getDefaultProps: function(){
		return {
			packageName:'React &amp; Flux NPM Automation'
		}
	},
	getInitialState: function(){
		return {
			packageName: 'React &amp; Flux NPM Automation'
		}
	},
	render: function() {
		return (
			<div>{this.props.packageName}, has been set up and is running!</div>
		);
	}
});

module.exports = Hello;
