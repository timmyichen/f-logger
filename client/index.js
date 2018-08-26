import React from 'react';
import { render } from 'react-dom';

import LoginForm from './components/auth/LoginForm.react';
import SignupForm from './components/auth/SignupForm.react';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm />
        <SignupForm />
      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
