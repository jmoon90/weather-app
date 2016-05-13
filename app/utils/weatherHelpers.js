var axios = require('axios');
var apiKey = '74a0bd30b1145a10d32cc0ff870bc4e5';

function getForecasts(cityState) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityState + '&mode=json&APPID=' + apiKey + '&cnt=5');
}

var helpers = {
  getForecasts: function(cityState) {
    return getForecasts(cityState)
      .then(function(info) {
        return info.data.list;
      });
  },
};

module.exports = helpers;
