import React from 'react';
import { render } from 'react-dom';
// when importing from packages, you just import __ from 'package-name'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// when importing from local code, you need to start with ./
// you do not need to include the .js that the file ends with
import Header from './components/layout/Header.react';
import Landing from './components/Landing.react';
import Login from './components/Login.react';
import Signup from './components/Signup.react';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<Index />, document.getElementById('app'));
