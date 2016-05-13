var React = require('react');
var weatherHelpers = require('../utils/weatherHelpers');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      forecasts: [],
    }
  },
  handleForecastClick: function(weather, e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.cityState,
      state: {
        weather: weather
      }
    })
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
      <Forecast
        onForecastClick = { this.handleForecastClick }
        forecasts = { this.state.forecasts }
        cityState = { this.props.routeParams.cityState }
        />
    )
  }
});

module.exports = ForecastContainer;
