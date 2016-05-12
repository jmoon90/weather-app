var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Navbar</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Navbar;
