import React from 'react';
import axios from 'axios';

import StudentRow from './StudentRow.react';

class StudentManagement extends React.Component {
  state = { students: [] };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = async () => {
    const res = await axios.get('/api/students');
    this.setState({ students: res.data.data });
  };

  addNewStudent = async ({ studentInfo }) => {
    const { firstName, lastName, studentId } = studentInfo;

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

  updateStudent = async ({ id, studentInfo }) => {
    console.log(id);
    console.log(studentInfo);
    const res = await axios.post(`/api/students/update/${id}`, studentInfo);

    if (res.data.success) {
      const students = this.state.students.map(student => {
        if (student.id === id) {
          // replace the student's data with the data newly returned from server
          return res.data.data;
        } else {
          return student;
        }
      });

      this.setState({ students });
    }
  };

  handleDelete = async ({ id }) => {
    const res = await axios.post(`/api/students/delete/${id}`, {
      studentId: id,
    });
    if (res.data.success) {
      const students = this.state.students.filter(
        student => student._id !== id,
      );
      this.setState({ students });
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
            <StudentRow onSubmit={this.addNewStudent} isNewStudent />
            {students.map(student => (
              <StudentRow
                key={`manageStudent${student.studentId}`}
                onSubmit={this.updateStudent}
                handleDelete={this.handleDelete}
                student={student}
              />
            ))}
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
