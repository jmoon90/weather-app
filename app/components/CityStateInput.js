var React = require('react');

var CityStateInput = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      text: 'Get Weather',
    }
  },

  getInitialState: function() {
    return {
      cityState: '',
    }
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    var cityState = this.state.cityState;
    this.setState({
      cityState: ''
    });

    this.context.router.push('/forecast/' + this.state.cityState)
  },

  handleUpdateCityState: function(e) {
    this.setState({
      cityState: e.target.value
    })
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmitUser}>
        <div className='form-group'>
          <input className='form-control'
                 placeholder='New York, NY'
                 onChange={ this.handleUpdateCityState }
                 value = { this.cityState }
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
