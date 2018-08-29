import React from 'react';

class Signup extends React.Component {
  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="signup-form-container">
        <form className="ui form signup-form">
          <div className="field">
            <label>First Name</label>
            <input placeholder="First Name" />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </div>
          <button className="ui button" type="submit" onClick={this.onSubmit}>
            Log In
          </button>
        </form>
        <style jsx>{`
          .signup-form-container {
            display: flex;
            justify-content: center;
          }
          .signup-form {
            padding: 30px;
            width: 300px;
            height: 400px;
            border: 1px solid black;
            border-radius: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default Signup;
