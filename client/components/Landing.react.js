import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  state = {};

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = async () => {
    const res = await axios.get('/api/current_user');
    this.setState({ user: res.data });
  }

  render() { 
    let loginStatus = 'You are not currently logged in';

    const { user } = this.state;

    if (user) {
      const { firstName, lastName, email } = user;
      loginStatus = `You are currently logged in as ${firstName} ${lastName} with email ${email}`;
    }

    return (
      <div>
        <h1>Welcome to the Friendly Student Logger App! :B</h1>
        <p>{loginStatus}</p>
        <Link to="/logout"><button className="ui button">log out</button></Link>
      </div>
    );
  }
}

export default Landing;
