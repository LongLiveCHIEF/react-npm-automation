var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var Hello = require('../src/hello.jsx');

describe('mocha tests', function (){

	jsdom({parsingMode: 'xml'});

	it('has document', function() {
		var div = document.createElement('div');
		expect(div.nodeName).eql('div');
	
	});

});
