import React from 'react';
import axios from 'axios';
import validations from '../utils/validation';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    // state is kind of like the component's memory store.  It holds all the things that
    // the component needs to keep track of.  As an example, a Car component might have
    // state for `fuelTank` (number), `engineIsRunning` (boolean), `lightsAreOn` (boolean).
    // A Human component might have state for `mood`, `hungerLevel`, `age`,

    // For this component, the component wll need to know what the user types into the
    // input fields.
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  // onSubmit, onChangefield, and render are all methods belonging to this component.
  // They can be called by using `this`, for example, `this.onChangeField()`

  // this function is fired when the user clicks the sign up button
  onSubmit = async e => {
    // By default, submit buttons will POST to some page and reload the page - we avoid
    // this by calling on the `preventDefault` method of the event (e)
    e.preventDefault();

    // We get the values from state and save them into separate variables.
    // This is so that we don't have to repeatedly use `this.state.whatever`.
    const { firstName, lastName, email, password } = this.state;

    const { getUserInfo } = this.props;

    // Run each field through specific validations from our utils/validations.js library
    // e.g. firstName and lastName should not be empty, email should actually be an email,
    // and password should be at least 8 characters
    const validationChecks = {
      firstName: validations.isNotEmpty(firstName),
      lastName: validations.isNotEmpty(lastName),
      email: validations.isEmail(email),
      password: validations.isAtLeastLength(password, 8),
    };

    // Then we loop through each field to check whether they are valid
    for (const field of Object.keys(validationChecks)) {
      // if they are not valid...
      if (!validationChecks[field].valid) {
        // alert the error message (from the validation library), then return
        // so it doens't check anything else
        alert(`${field} ${validationChecks[field].errorMsg}!`);
        return;
      }
    }

    // Once all the validations pass, we send the request to the server, sending all of the state
    // with the request (the state contains all the signup info).
    const res = await axios.post('/api/user/signup', this.state);

    // Once it comes back, we check to see if it was successful, then we alert a yay message
    if (res.status == 200) {
      getUserInfo();
    } else {
      alert('failed to sign up. try again.');
    }
  };

  // Instead of having a separate function for setting each individual field, we use a generic
  // `onChangeField` where we define what field to set and what value to set it to
  onChangeField = event => {
    // We grab the name of the element (see below where `name="firstName"`) and the value (of the inuput)
    // from the target of the event that is passed from `onChange`
    const { name, value } = event.target;
    // We put `[name]` in brackets so it uses the value of `field`, rather than 'field' itself.
    this.setState({
      [name]: value,
    });
  };

  // Anytime this component's state changes, it will re-render the component.  The magic of react!
  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div className="signup-form-container">
        <form className="ui form signup-form">
          <div className="field">
            <label>First Name</label>
            <input
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.onChangeField}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.onChangeField}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.onChangeField}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangeField}
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
