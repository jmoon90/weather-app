var React = require('react');

var CityStateInput = React.createClass({
  getDefaultProps: function() {
    return {
      text: 'Get Weather',
    }
  },

  render: function() {
    return(
      <form>
        <div className='form-group'>
          <input className='form-control'
                 placeholder='New York, NY'
                 onChange={ this.props.onUpdateUser }
                 value = { this.props.cityState }
                 type='text' />
        </div>
        <div className='form-group col-sm-4 col-sm-offset-4' style={this.props.style}>
          <button
            className='btn btn-block btn-success'
            type='submit'>
            {this.props.text}
          </button>
        </div>
      </form>
    )
  }
});

module.exports = CityStateInput;
