var Reflux = require("reflux");
var pkg = require("../../../package.json");
var store = Reflux.createStore({
	data: {pkg},
	getInitialState: function(){
		return this.data;
	}

});

module.exports = store;
