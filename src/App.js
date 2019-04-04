import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
