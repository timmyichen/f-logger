import React from 'react';

class Student extends React.Component {

  render() {
    const { firstName, lastName, studentId } = this.props;

    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{studentId}</td>
        <td>
          <button className="ui icon button">
            <i className="edit icon" />
          </button>
        </td>
        <td>
          <button className="ui red icon button" onClick={() => this.props.handleDelete(studentId)}>
            <i className="trash icon" />
          </button>
        </td>
      </tr>
    );
  }
}

export default Student;
