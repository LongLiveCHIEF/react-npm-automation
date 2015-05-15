var Hello = require('../src/client/hello.jsx');


describe('Setup test', function (){

	var node, message;
	var packageName = 'test';

	// render </Hello > into jsdom
	before('rendering component', function(){
		var component = React.render(
			<Hello packageName={packageName} />,
			document.body);
	
		var component = React.test.findRenderedDOMComponentWithTag(component, 'div');
		message = component.getDOMNode().textContent;
	});	
	
	it('domino is working', function() {
		expect(document.body).to.be.ok;
		expect(document.nobody).to.not.be.ok;
	});

	it('should render a success message', function(){
		expect(message).to.contain('has been set up');
	});

	it('should include the package name', function(){
		expect(message).to.contain(packageName);
	});
});
