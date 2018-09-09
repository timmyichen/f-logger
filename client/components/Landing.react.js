import React from 'react';

class Landing extends React.Component {
  render() {
    let loginStatus = 'You are not currently logged in';

    const { user } = this.props;

    if (user) {
      const { firstName, lastName, email } = user;
      loginStatus = `You are currently logged in as ${firstName} ${lastName} with email ${email}`;
    }

    return (
      <div>
        <h1>Welcome to the Friendly Student Logger App! :B</h1>
        <p>{loginStatus}</p>
      </div>
    );
  }
}

export default Landing;
