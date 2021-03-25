import React, { Component } from "react";
import "../App.css";
import actions from '../api'
import { Switch, Route, Link } from "react-router-dom";

class ThreadBox extends Component {

    state = {
        header: '',
        messages: [],
        userList: []
    }

    showThread = () => {

    }



  render() {
    return (
      <div className="thread-box">
        <div className="thread-header">HEADER</div>
        <div className="thread-body">
          <div className="chat-box">
          </div>
        </div>
        <div className="thread-input">INPUT</div>

      </div>
    );
  }
}

export default ThreadBox;
