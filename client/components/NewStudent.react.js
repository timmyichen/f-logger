import * as React from 'react';

class NewStudent extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    studentId: '',
  };

  onChangeField = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = async () => {
    const { firstName, lastName, studentId } = this.state;
    const { addNewStudent } = this.props;

    const success = await addNewStudent({
      firstName,
      lastName,
      studentId,
    });

    if (success) {
      this.setState({
        firstName: '',
        lastName: '',
        studentId: '',
      });
      this.firstNameInput.focus();
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  };

  render() {
    const { firstName, lastName, studentId } = this.state;

    return (
      <tr onKeyPress={this.handleKeyPress}>
        <td>
          <div className="ui input">
            <input
              ref={element => (this.firstNameInput = element)}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={this.onChangeField}
            />
          </div>
        </td>
        <td>
          <div className="ui input">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={this.onChangeField}
            />
          </div>
        </td>
        <td>
          <div className="ui input">
            <input
              name="studentId"
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={this.onChangeField}
            />
          </div>
        </td>
        <td colSpan="2">
          <button
            type="submit"
            className="ui primary button"
            onClick={this.onSubmit}
          >
            Add
          </button>
        </td>
        <style jsx>{`
          .ui.input {
            width: 100%;
          }
          .ui.primary.button {
            width: 100%;
          }
        `}</style>
      </tr>
    );
  }
}

export default NewStudent;
