import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
// import './App.css';

// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css';

// Containers
import {DefaultLayout} from './containers';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={DefaultLayout}/>
          <Route path="/campaigns" name="Campaigns" component={DefaultLayout}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
