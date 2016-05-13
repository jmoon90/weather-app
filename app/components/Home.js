var React = require('react');
var Navbar = require('./Navbar');
var CityStateInput = require('./CityStateInput');

var divStyle = {
  backgroundImage: 'url(http://www.reactjsprogram.com/React-Fundamentals-Project/app/images/pattern.svg)',
  height: '100%',
  width: '100%'
};

var Home = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Enter a City and State</h1>
        <CityStateInput />
      </div>
    )
  }
})

module.exports = Home;
