/** @jsx React.DOM */
var React = require('react');
var MatchSelector = require('./matchSelector.jsx');
var MatchSelectorData = require('./matchSelectorData.jsx');

var Main = React.createClass({
	render: function() {
		console.log('RENDER MAIN')
		return (
			<html>
				<head>
					<meta charSet="utf-8" />
				  	<title>Football Web-app</title>
				  	<link rel="stylesheet" href="/public/styles/style.css?v=sdfsdfsdf" />
				  	
				</head>
				<body>
					<header>
						<ul className="menu">
							<li>Teams</li>
							<li>Matches</li>
						</ul>
					</header>
				  	<div id="main">
	  					<div id="matchSelectorContainer">
	  						<MatchSelector />
	  					</div>
					</div>

					<script type="text/javascript" src="/public/scripts/components.js?v=sddfg"></script>
				</body>
			</html>
		);
	}
});

module.exports = Main;