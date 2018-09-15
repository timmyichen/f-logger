import React from 'react';
import axios from 'axios';

import Student from './Student.react';
import NewStudent from './NewStudent.react';

class StudentManagement extends React.Component {
  state = { students: [] };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = async () => {
    const res = await axios.get('/api/students');
    this.setState({ students: res.data.data });
  };

  addNewStudent = async newStudentInfo => {
    const { firstName, lastName, studentId } = newStudentInfo;

    const res = await axios.post('/api/students/create', {
      firstName,
      lastName,
      studentId,
    });

    if (res.data.success) {
      this.setState(prevState => ({
        students: [...prevState.students, res.data.data],
      }));
    } else {
      alert('failed to create student');
    }

    return res.data.success;
  };

  handleDelete = async studentIdToDelete => {
    const res = await axios.delete(`api/students/delete/${studentIdToDelete}`, {
      studentId: studentIdToDelete
    });
    if(res.data.success) {
      // const students = this.state.students.filter(student => student.studentId !== studentIdToDelete);
      // this.setState({ students });
      this.setState(prevState => ({students: prevState.students.filter(student => student.studentId !== studentIdToDelete)}));
    } else {
      alert('Error deleting student.');
    }
  };

  render() {
    const { students } = this.state;

    return (
      <div>
        <div />
        <table id="student-management-table" className="ui celled table">
          <thead>
            <tr>
              <th className="five wide">First Name</th>
              <th className="five wide">Last Name</th>
              <th className="four wide">ID</th>
              <th className="one wide">Edit</th>
              <th className="one wide">Delete</th>
            </tr>
          </thead>
          <tbody>
            <NewStudent addNewStudent={this.addNewStudent} />
            {students.map(student => (
              <Student
                handleDelete={this.handleDelete}
                key={`manageStudent${student.studentId}`}
                {...student}
              />
              ))
            }
          </tbody>
        </table>
        <style jsx>{`
          #student-management-table {
            margin: 20px auto;
            width: 90%;
          }
        `}</style>
      </div>
    );
  }
}

export default StudentManagement;
