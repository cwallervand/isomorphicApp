/** @jsx React.DOM */
var React = require('react');

var TeamNameAndLogo = React.createClass({
	render: function() {
		return (
			<div>
				{
					this.displayLogo()
				}
				<span>{this.props.data.name}</span>
			</div>
		);
	},
	displayLogo: function() {
		if (this.props.displayLogo) {
			return (
				<div className="logoContainer">
					<img src={this.setLogoUrl()} />
				</div>
			)
		}
		return "";
	},
	setLogoUrl: function() {
		
		this.logoUrl = this.props.data.icon;
		if (this.props.displayNationLogo) {
			this.logoUrl = this.props.data.nationality.icon;
		}
		return this.logoUrl;
	}

});

module.exports = TeamNameAndLogo;
