    // this.state.weather = this.props.location.state.weather.weather
    // this.state.mainTemp = this.props.location.state.weather.main
    // this.state.date = this.props.location.state.weather.dt

var React = require('react');

var Detail = React.createClass({
  render: function() {
    return(
      <div>
        <h1>{this.props.location.state.weather.dt_txt}</h1>
        <ul>
          <li>{this.props.routeParams.cityState}</li>
          <li>{this.props.location.state.weather.weather[0].description}</li>
          <li>min temp: {this.props.location.state.weather.main.temp_min}</li>
          <li>max temp: {this.props.location.state.weather.main.temp_max}</li>
          <li>humidity: {this.props.location.state.weather.main.humidity}</li>
        </ul>
      </div>
    )
  }
})

module.exports = Detail;
