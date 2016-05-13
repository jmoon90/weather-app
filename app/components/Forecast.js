var React = require('react');
var weatherHelpers = require('../utils/weatherHelpers');

var Forecast = React.createClass({

  getInitialState: function() {
    return {
      forecasts: [],
      daily: []
    }
  },

  componentDidMount: function() {
    weatherHelpers.getForecasts(this.props.routeParams.cityState)
      .then(function(info) {
        this.setState({
          forecasts: info,
        })
      }.bind(this))
  },

  render: function() {
    return(
      <div>
        <h1>FORECAST</h1>
        <ul>
          {this.state.forecasts.map(item => <li>{item.weather[0].main}</li>)}
        </ul>
      </div>
    )
  }
});

module.exports = Forecast;
