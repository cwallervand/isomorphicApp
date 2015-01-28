/** @jsx React.DOM */
var React = require('react');
var MatchSelectorMatch = require('./matchSelectorMatch.jsx');
var ReactAsync = require('react-async');
var DataLoader = require('../utils/dataLoader.js')

var MatchSelector = React.createClass({
	mixins: [ReactAsync.Mixin],
	requestUrl:'http://rest.tv2.no:80/sports-dw-rest/sport/football/schedule/tournament/230/season/336',
	requestInterval: 5000,
	//Get the initial data for the component
	getInitialStateAsync: function(cb) {
		console.log('GET INITIAL STATE ASYNC');
		var self = this;
		DataLoader.getData(this.requestUrl, function(res) {
			cb(null, res.body);
		});
  	},
  	//Only called on the client
  	componentDidMount: function() {
  		var self = this;
  		DataLoader.poll(this.requestUrl, this.requestInterval, function(res) {
  			console.log('Poll', res.body);
  			self.setState({matches: [{
id: 730945,
round: {
id: 128988,
name: "1. runde",
roundNumber: 1
},
channel: {
id: 101,
name: "TV 2 Sport Premium",
icon: "http://static.tv2.no/jsport/multimedia/kanal/138x42/101.png",
shortName: "TV 2 Sport Premium"
},
assetId: 830704,
assetIdSummary: 836350,
startTime: "2014-08-16T13:45:00+02:00",
startTimeTvStandard: "2014-08-16T13:45:00+02:00",
tournament: {
id: 230,
name: "Premier League",
type: {
id: 1,
name: "Serie"
}
},
teamA: {
id: 735,
name: "Man. United",
icon: "http://static.tv2.no/jsport/multimedia/laglogo/32x32/735.png",
shortName: "MAU",
trimmedName: "Man. United",
goals: 1,
goalsHalftime: 0,
nationality: {
id: 2,
name: "England",
icon: "http://static.tv2.no/jsport/multimedia/flagg/v2/2.svg"
},
stadium: {
id: 105,
name: "Old Trafford",
town: "Manchester"
},
teamLineup: "3-4-1-2"
},
teamB: {
id: 791,
name: "Swansea",
icon: "http://static.tv2.no/jsport/multimedia/laglogo/32x32/791.png",
shortName: "SWA",
trimmedName: "Swansea",
goals: 2,
goalsHalftime: 1,
nationality: {
id: 18,
name: "Wales",
icon: "http://static.tv2.no/jsport/multimedia/flagg/v2/18.svg"
},
stadium: {
id: 1486,
name: "Liberty Stadium",
town: "Swansea"
},
teamLineup: "4-2-3-1"
},
matchStatus: {
id: 1,
name: "Slutt",
shortName: "Slutt"
}
}]})
  		});
  	},
	render: function() {
		console.log('RENDER MATCHSELECTOR');
		return (
			<ul className="matches">
				{
					//Map each object in the data to a match obecjt and use match object 
					//to render the MatchSelectorMatch component
					this.state.matches.map(function(match) {
  						return (<MatchSelectorMatch key={match.id} data={match} />)
      				})
      			}
			</ul>
		);
	}
});

module.exports = MatchSelector;
