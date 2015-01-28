/** @jsx React.DOM */
var React = require('react');
var TeamNameAndLogo = require('./teamNameAndLogo.jsx');

var MatchSelectorMatch = React.createClass({
	popup: function() {
		console.log("MATCH CLICKED");
	},
	render: function() {
		return (
			<li className="match" onClick={this.popup}>
				<div className="teamA">
					<TeamNameAndLogo key={this.props.data.teamA.id} displayLogo={true} displayNationLogo={false} data={this.props.data.teamA} />
				</div>
				<div className="teamB">
					<TeamNameAndLogo key={this.props.data.teamB.id} displayLogo={true} displayNationLogo={false} data={this.props.data.teamB} />
				</div>
			</li>
		);
	}
});

module.exports = MatchSelectorMatch;
