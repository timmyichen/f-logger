import React from 'react';
import { Link } from 'react-router-dom';

class AuthedHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/dashboard">
          <button className="ui button">Dashboard</button>
        </Link>
        <a href="/logout">
          <button className="ui button">Log Out</button>
        </a>
        <style jsx>{`
          .header {
            height: 50px;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: space-around;
            width: 100%;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default AuthedHeader;
