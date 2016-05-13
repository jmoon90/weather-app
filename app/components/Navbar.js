var React = require('react');
var CityStateInput = require('./CityStateInput');

var divStyle = {
  backgroundColor: 'rgba(252, 90, 44, 0.89)',
  padding: '20px 0 ',
}

var Navbar = React.createClass({
  render: function() {
    return(
      <div class='navbar' style={divStyle}>
        <div className='col-sm-6'>
          <h1>Weather Program</h1>
        </div>
        <div className='col-sm-6'>
          <CityStateInput />
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Navbar;
