import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><button className="ui button">Home</button></Link>
        <Link to="/login"><button className="ui button">Log in</button></Link>
        <Link to="/signup"><button className="ui button">Sign up</button></Link>
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

export default Header;
