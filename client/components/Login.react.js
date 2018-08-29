import React from 'react';

class Login extends React.Component {
  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="ui form login-form">
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
          .login-form-container {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          }
          .login-form-container .login-form {
            padding: 30px;
            width: 300px;
            height: 250px;
            border: 1px solid black;
            border-radius: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default Login;
