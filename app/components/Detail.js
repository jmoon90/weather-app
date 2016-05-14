var React = require('react');
var utils = require('../helpers/utils');
var getDate = utils.getDate;

var styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  },
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

var Detail = React.createClass({
  render: function() {
    return(
      <div style={styles.descriptionContainer}>
        <h1>{getDate(this.props.location.state.weather.dt)}</h1>
          <p>{this.props.routeParams.cityState}</p>
          <p>{this.props.location.state.weather.weather[0].description}</p>
          <p>min temp: {this.props.location.state.weather.temp.min}</p>
          <p>max temp: {this.props.location.state.weather.temp.max}</p>
          <p>humidity: {this.props.location.state.weather.humidity}</p>
      </div>
    )
  }
})

module.exports = Detail;
