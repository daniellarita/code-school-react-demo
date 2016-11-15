import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import CommentBox from './CommentBox';
import './App.css';

class StoryBox extends Component {
  constructor() {
    super();

    this.state = {
      tweets: [

      ]
    }

    this.startCounter();
  }

  startCounter() {
    setInterval(() => {
      this.setState()
    }, 2000);
  }

  render() {
    const now = new Date();
    return (
      <div className="Stories">
        <Header tweets={this.state.tweets} hello="world" />
        <Intro tweets={this.state.tweets} />
        <p className="lead">Current time:{now.toTimeString()}</p>
        <CommentBox />
      </div>
    );
  }
}

export default StoryBox;
