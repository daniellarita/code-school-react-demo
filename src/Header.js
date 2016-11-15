import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {

  render() {
    const now = new Date();
    const topicsList=['HTML', 'JavaScript','React']
    return (
      <div className="App-header">
        <h2>Story Box</h2>
        <p className="lead">Current time:{now.toTimeString()}</p>
        <ul>
          {topicsList.map(topic =>(<li>{topic}</li>))}
        </ul>
      </div>
    );
  }
};

export default Header;
