var React = require('react');
var CityStateInput = require('./CityStateInput');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

var Navbar = React.createClass({
  render: function() {
    return(
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{margin: 0}}>Weather Program</h2>
          <CityStateInput />
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Navbar;
