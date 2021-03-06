import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  browserHistory,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Presentation from './components/Presentation'
import Info from './components/Info'
import Photos from './components/Photos'

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
