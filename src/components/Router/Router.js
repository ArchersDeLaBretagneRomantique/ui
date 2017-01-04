import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  browserHistory,
} from 'react-router'

import App from '../App'
import Home from '../Home'
import Presentation from '../Presentation'
import Info from '../Info'
import Photos from '../Photos'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="presentation" component={Presentation} />
      <Route path="info" component={Info} />
      <Route path="photos" component={Photos} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)
