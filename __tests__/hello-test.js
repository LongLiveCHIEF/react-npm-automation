jest.dontMock('../src/hello.jsx');

describe('Hello', function(){
	it('Outputs a welcome message', function(){
var React = require('react/addons');
var Hello = require('../src/hello.jsx'); 
		var TestUtils = React.addons.TestUtils;

		// Output message
		var hello = TestUtils.renderIntoDocument(<Hello />);
		var output = TestUtils.findRenderedComponentWithTag(hello,'div');
		expect(output.getDOMNode().textContent).toContain('has been set up and is running!');
	});
});
