import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Home, Browse, Signin, Signup} from './pages/index'

import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <Signup />
      </Route>
    </Router>
  );
}
