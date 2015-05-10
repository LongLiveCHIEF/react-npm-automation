var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Hello = require('../src/hello');

describe('Setup test', function (){

	jsdom({parsingMode: 'xml'});

	// render </Hello > into jsdom
	
	before('rendering and locating element', function (){
		// render <Hello /> into jsdom
		var helloComponent = TestUtils.renderIntoDocument(
			<Hello packageName="test" />
		);
				
		var helloDiv = TestUtils.findRenderedDOMComponentWithTag(helloComponent, 'div');

		this.helloElement = helloDiv.getDOMNode().textContent;
	});

	
	it('jsdom is working', function() {
		var div = document.createElement('div');
		expect(div.nodeName).eql('div');
	
	});

	it('should render a success message',function(){
		expect(this.helloElement).to.be.a('string');
	});

	it('should show package name in message',function(){
		expect(this.helloElement).to.contain('test');	
	});



});
