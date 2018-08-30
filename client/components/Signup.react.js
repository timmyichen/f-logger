import React from 'react';
import axios from 'axios';
import validations from '../utils/validation';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  onSubmit = async e => {
    e.preventDefault();

    const { firstName, lastName, email, password } = this.state;

    const validationChecks = {
      firstName: validations.isNotEmpty(firstName),
      lastName: validations.isNotEmpty(lastName),
      email: validations.isEmail(email),
      password: validations.isAtLeastLength(password, 8),
    };

    for (const field of Object.keys(validationChecks)) {
      if (!validationChecks[field].valid) {
        alert(`${field} ${validationChecks[field].errorMsg}!`);
        return;
      }
    }

    const res = await axios.post('/api/user/signup', this.state);
    if (res.data.success) {
      alert('signed up yay!');
    }
  }

  onChangeField = (field, value) => {
    const state = this.state;
    state[field] = value;

    this.setState(state);
  }

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div className="signup-form-container">
        <form className="ui form signup-form">
          <div className="field">
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={e => this.onChangeField('firstName', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={e => this.onChangeField('lastName', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={e => this.onChangeField('email', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              placeholder="Password"
              value={password}
              onChange={e => this.onChangeField('password', e.target.value)}
              type="password"
            />
          </div>
          <button className="ui button" type="submit" onClick={this.onSubmit}>
            Sign Up
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
