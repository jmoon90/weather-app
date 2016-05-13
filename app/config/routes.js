var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Home = require('../components/Home');
var Forecast = require('../components/Forecast');
var Navbar = require('../components/Navbar');
var Detail = require('../components/Detail');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Navbar} >
      <IndexRoute component={Home} />
      <Route path='/forecast/:cityState' component={Forecast} />
      <Route path='/detail/:cityState' component={Detail} />
    </Route>
  </Router>
);

module.exports = routes;
