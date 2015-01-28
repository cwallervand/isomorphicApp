/** @jsx React.DOM */
var React = require('react');
var DataLoader = require('../utils/dataLoader.js')


var MatchSelectorData = React.createClass({
	render: function() {
		console.log('MATCH SELECTOR DATA RENDER', this.props.matches);
		return (
			<script type="application/json" id="matchSelectorData">
				{
					this.props.matches
				}
			</script>
		);
	}
});

module.exports = MatchSelectorData;




