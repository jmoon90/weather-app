var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return(
    <div style={styles.dayContainer}>
      <h2 onClick={props.onForecastClick.bind(props,props.day)} style={styles.subheader}>{date}</h2>
    </div>

  )
}

function Forecast(props) {
  return(
    <div>
      <h1 style={styles.header}>{props.cityState}</h1>
      <div style={styles.container}>
        {props.forecasts.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} onForecastClick={props.onForecastClick} />
        })}
      </div>
    </div>
  )
}

Forecast.propTypes = {
  onForecastClick: PropTypes.func.isRequired,
  forecasts: PropTypes.array.isRequired,
  cityState: PropTypes.string.isRequired
}

module.exports = Forecast;
