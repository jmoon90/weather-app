var React = require('react');
var Navbar = require('./Navbar');

var divStyle = {
  backgroundImage: 'url(http://www.reactjsprogram.com/React-Fundamentals-Project/app/images/pattern.svg)',
  height: '100%',
  width: '100%'
}

var Home = React.createClass({
  render: function() {
    return(
      <Navbar>
        <div style={divStyle}>
          <h1>Main.js Header</h1>
        </div>
      </Navbar>
    )
  }
})

module.exports = Home;
