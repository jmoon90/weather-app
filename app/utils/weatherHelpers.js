var axios = require('axios');
var apiKey = '74a0bd30b1145a10d32cc0ff870bc4e5';

function getForecasts(cityState) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityState + '&mode=json&APPID=' + apiKey + '&cnt=5');
}

function getCitySpecific(cityState) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityState +' &type=accurate&APPID=' + apiKey + '&cnt=5');
}


var helpers = {
  getForecasts: function(cityState) {
    return getForecasts(cityState)
      .then(function(info) {
        return info.data.list;
      });
  },

  getCitySpecific(cityState) {
    return getCitySpecific(cityState)
      .then(function(info) {
        console.log('info',info);
      });
  }
};

module.exports = helpers;
