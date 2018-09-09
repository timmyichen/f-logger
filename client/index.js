import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
// when importing from packages, you just import __ from 'package-name'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// when importing from local code, you need to start with ./
// you do not need to include the .js that the file ends with
import Header from './components/layout/Header.react';
import AuthedHeader from './components/layout/AuthedHeader.react';
import Landing from './components/Landing.react';
import Login from './components/Login.react';
import Signup from './components/Signup.react';
import Dashboard from './components/Dashboard.react';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = async () => {
    const res = await axios.get('/api/current_user');
    this.setState({ user: res.data });
  };

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div>
          {user ? <AuthedHeader /> : <Header />}
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Landing {...props} user={user} />}
            />
            <Route
              path="/dashboard"
              render={props => <Dashboard {...props} user={user} />}
            />
            {!user ? (
              <Switch>
                <Route
                  path="/login"
                  render={props => (
                    <Login {...props} getUserInfo={this.getUserInfo} />
                  )}
                />
                <Route
                  path="/signup"
                  render={props => (
                    <Signup {...props} getUserInfo={this.getUserInfo} />
                  )}
                />
              </Switch>
            ) : (
              <Redirect to="/dashboard" />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<Index />, document.getElementById('app'));
