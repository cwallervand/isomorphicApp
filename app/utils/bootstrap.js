//The application bootstrap component, only used on the client

var React = require('react');
var Main = require('../components/main.jsx');
var MatchSelector = require('../components/matchSelector.jsx');

if (typeof window !== 'undefined') {
	console.log("BOOTSTRAP APPLICATION ON CLIENT");
    window.onload = function() {
    	//When window is loaded, render the main component
        React.renderComponent(Main(), document);
    }
}