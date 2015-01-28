var request = require('superagent');

var DataLoader = {};

DataLoader.getData = function(url, cb) {
	request.get(url, function getDataSuccess(res) {
		cb(res);
	});
}

DataLoader.poll = function(url, interval, cb) {
	//Set up the local poller function
	var poller = function(cb) {
		window.setTimeout(function() {

			DataLoader.getData(url, function(res) {
				//When data is successfully retrieved, run the callback function
				cb(res);
				//then execute the poller function
				poller(cb);
			})
		}, interval);
	}

	//Start polling
	poller(cb);
}

module.exports = DataLoader;