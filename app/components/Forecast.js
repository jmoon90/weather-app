var React = require('react');
var weatherHelpers = require('../utils/weatherHelpers');
var Link = require('react-router').Link


var Forecast = React.createClass({
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
      <div>
        <h1 className='col-sm-8 col-sm-offset-4'>{this.props.routeParams.cityState}</h1>
        <h3 className='col-sm-8 col-sm-offset-4'>Select a day</h3>
        <ul>
          {this.state.forecasts.map(item => <li
          onClick={this.handleForecastClick.bind(this,item)} className='col-sm-3 col-sm-offset-3'>
                                              {item.weather[0].main}
                                            </li>)}
        </ul>
      </div>
    )
  }
});

module.exports = Forecast;
