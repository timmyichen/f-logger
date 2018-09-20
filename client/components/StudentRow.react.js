import * as React from 'react';
import PropTypes from 'prop-types';

class NewStudent extends React.Component {
  static propTypes = {
    student: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    isNewStudent: PropTypes.bool,
    handleDelete: PropTypes.func,
  };

  static defaultProps = {
    student: null,
    isNewStudent: false,
    handleDelete: () => {},
  };

  state = {
    firstName: '',
    lastName: '',
    studentId: '',
    isEditing: false,
  };

  componentDidMount() {
    const { student } = this.props;

    if (student) {
      this.setState({
        firstName: student.firstName,
        lastName: student.lastName,
        studentId: student.studentId,
      });
    }
  }

  onChangeField = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = async () => {
    const { firstName, lastName, studentId } = this.state;
    const { onSubmit, isNewStudent } = this.props;

    const success = await onSubmit({
      firstName,
      lastName,
      studentId,
    });

    if (success && isNewStudent) {
      this.setState({
        firstName: '',
        lastName: '',
        studentId: '',
      });
      this.firstNameInput.focus();
    }
    this.setState({ isEditing: false });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  };

  toggleEdit = () => {
    const { isEditing } = this.state;

    this.setState({ isEditing: !isEditing });
  };

  render() {
    const { firstName, lastName, studentId, isEditing } = this.state;
    const { isNewStudent, handleDelete } = this.props;

    if (isEditing || this.props.isNewStudent) {
      return (
        <EditableStudent
          setRef={element => (this.firstNameInput = element)}
          firstName={firstName}
          lastName={lastName}
          studentId={studentId}
          onChangeField={this.onChangeField}
          onSubmit={this.onSubmit}
          toggleEdit={this.toggleEdit}
          handleKeyPress={this.handleKeyPress}
          isNewStudent={isNewStudent}
        />
      );
    }

    return (
      <StaticStudent
        firstName={firstName}
        lastName={lastName}
        studentId={studentId}
        toggleEdit={this.toggleEdit}
        handleDelete={handleDelete}
      />
    );
  }
}

export default NewStudent;

const StaticStudent = props => (
  <tr>
    <td>{props.firstName}</td>
    <td>{props.lastName}</td>
    <td>{props.studentId}</td>
    <td>
      <button className="ui icon button" onClick={props.toggleEdit}>
        <i className="edit icon" />
      </button>
    </td>
    <td>
      <button
        className="ui red icon button"
        onClick={() => props.handleDelete(props.studentId)}
      >
        <i className="trash icon" />
      </button>
    </td>
  </tr>
);

StaticStudent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  studentId: PropTypes.number,
  toggleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
};

StaticStudent.defaultProps = {
  firstName: '',
  lastName: '',
  studentId: null,
  handleDelete: () => {},
};

const EditableStudent = props => {
  const actions = props.isNewStudent ? (
    <td colSpan={2}>
      <button
        type="submit"
        className="ui primary button"
        onClick={props.onSubmit}
      >
        Save
      </button>
    </td>
  ) : (
    [
      <td key="save-student-container">
        <button
          type="submit"
          className="ui primary icon button"
          onClick={props.onSubmit}
        >
          <i className="check icon" />
        </button>
      </td>,
      <td key="cancel-student-container">
        <button className="ui icon button" onClick={props.toggleEdit}>
          <i className="ban icon" />
        </button>
      </td>,
    ]
  );

  return (
    <tr className="editable-student-wrapper" onKeyPress={props.handleKeyPress}>
      <td>
        <div className="ui input">
          <input
            ref={props.setRef}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={props.firstName}
            onChange={props.onChangeField}
          />
        </div>
      </td>
      <td>
        <div className="ui input">
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.onChangeField}
          />
        </div>
      </td>
      <td>
        <div className="ui input">
          <input
            name="studentId"
            type="text"
            placeholder="Student ID"
            value={props.studentId}
            onChange={props.onChangeField}
          />
        </div>
      </td>
      {actions}
      <style jsx>{`
        .editable-student-wrapper :global(.ui.input) {
          width: 100%;
        }
        .editable-student-wrapper :global(.ui.primary.button) {
          width: 100%;
        }
      `}</style>
    </tr>
  );
};

EditableStudent.propTypes = {
  isNewStudent: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  onChangeField: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  studentId: PropTypes.number,
};

EditableStudent.defaultProps = {
  isNewStudent: false,
  firstName: '',
  lastName: '',
  studentId: null,
};
