import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <div className="column">
            <div className="ui six buttons">
              <button className="ui button">All</button>
              <button className="ui button">Period 1</button>
              <button className="ui button">Period 2</button>
              <button className="ui button">Period 3</button>
              <button className="ui button active">Period 7</button>
              <button className="ui button">Period 8</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h1 className="ui header">Period 7</h1>
            <div className="column">
              <table className="ui selectable celled table large table">
                <thead>
                  <tr>
                    <th className="five wide">Student</th>
                    <th className="three wide">
                      Total Time Spent Outside Your Class This Year
                    </th>
                    <th className="eight wide">Today</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>3 min</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Jamie</td>
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <td>Tee</td>
                    <td>4 min</td>
                    <td />
                  </tr>
                  <tr className="warning">
                    <td>Dave</td>
                    <td>22 min</td>
                    <td>Period 1: 3 min; Period 2: 4 min</td>
                  </tr>
                  <tr>
                    <td>Josh</td>
                    <td />
                    <td />
                  </tr>
                  <tr className="negative">
                    <td>Gaspare</td>
                    <td>94 min</td>
                    <td>Period 1: 4 min; Period 2: 5 min; Period 3: 4 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
