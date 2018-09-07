import React from 'react';
import axios from 'axios';
import validations from '../utils/validation';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
     password: '',
    };
  }
    
  onSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    
    const validationChecks = {
      email: validations.isEmail(email),
      password: validations.isAtLeastLength(password, 8),
    };
  
    for (const field of Object.keys(validationChecks)) {
      if (!validationChecks[field].valid) {
        alert(`${field} ${validationChecks[field].errorMsg}!`);
        return;
      }
    }
  
    const res = await axios.post('/api/user/login', this.state);
  
    if(res.status == 200){
      alert('yay you logged in.');
      
    }
      else {
        alert('invalid login. try again.');
    }
  }
  
  onChangeField = (field, value) => {
    this.setState({
      [field]: value,
    });
  }
      
  render() {
    const { email, password } = this.state;
    
    return (
      <div className="login-form-container">
        <form className="ui form login-form">
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
              type="password"
              value={password}
              onChange={e => this.onChangeField('password', e.target.value)}
              />
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
