import React from 'react';
import { render } from 'react-dom';

import TestComponent from './components/TestComponent.react';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        hi!
        <TestComponent />
      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));