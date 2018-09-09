import React from 'react';
import Student from './Student.react';

const dummyStudents = [
  {
    _id: '5b95866d4bb5f68329cb9fd1',
    firstName: 'student',
    lastName: 'one',
    studentId: 1,
    owner: '5b95786b51fc6c7dafe8441a',
    logs: [],
    timeCreated: '2018-09-09T20:45:33.980Z',
    __v: 0,
  },
  {
    _id: '5b9586754bb5f68329cb9fd2',
    firstName: 'student',
    lastName: 'two',
    studentId: 2,
    owner: '5b95786b51fc6c7dafe8441a',
    logs: [],
    timeCreated: '2018-09-09T20:45:41.138Z',
    __v: 0,
  },
  {
    _id: '5b95867b4bb5f68329cb9fd3',
    firstName: 'student',
    lastName: 'three',
    studentId: 3,
    owner: '5b95786b51fc6c7dafe8441a',
    logs: [],
    timeCreated: '2018-09-09T20:45:47.800Z',
    __v: 0,
  },
];

class StudentManagement extends React.Component {
  state = { students: dummyStudents };

  render() {
    const { students } = this.state;

    return (
      <div>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <Student {...student} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentManagement;
