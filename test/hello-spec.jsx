var Hello = require('../src/client/hello.jsx');


describe('Setup test', function (){

	var node, message;

	// render </Hello > into jsdom
	before('rendering component', function(){
		var component = React.render(
			<Hello packageName="test"/>,
			document.body);
	});	
	
	it('domino is working', function() {
		expect(true).to.be.ok;
	});

});
