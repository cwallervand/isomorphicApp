//Require node modules and assign them to objects for usage 
//web-app framework
var Express = require('express');
var React = require('react');
//JSX extension for node used with react for "templating"
var JSX = require("node-jsx").install({ extension: ".jsx" });
var ReactAsync = require('react-async');
var request = require('superagent');
var DataLoader = require('./app/utils/dataLoader.js');

//Sets the main application component
var Main = require('./app/components/main.jsx');

var app = Express();

var PORT = 1337;
var HOST_NAME = '127.0.0.1';

var server = app.listen(PORT, HOST_NAME, function serverListenFn() {
	console.log('Server running. Listening on port %d, host name: %s', server.address().port, server.address().address);
});

//Set up routing for the application using Express JS
app.get('/', function getMainFn(req, res){
	ReactAsync.renderComponentToStringWithAsyncState(
		Main(),
		function sendMarkupFn(err, markup) {
			res.send("<!DOCTYPE html>" + markup);
		}	
	)
});

//Set static resources (e.g. CSS, images, etc)
app.use("/public", Express.static(__dirname + '/public'));