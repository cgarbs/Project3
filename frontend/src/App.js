import React, { Component } from "react";
import "./App.css";
// import Home from "./components/Home";
// import AddPost from "./components/AddPost";
// import Auth from "./components/Auth";
// import Profile from "./components/Profile";
import { Switch, Route, Link } from "react-router-dom";
// import actions from "./api";
import Thread from "./components/Thread.js";

// Testing Git Pull/Push

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <div className="title">
            <h1>Raven</h1>
          </div>
          <div className="search-bar">
            <h1>
              <input placeholder="Search"></input>
            </h1>
          </div>
          <div className="profile-options">
            <h1>Profile</h1>
          </div>
        </div>

        <div className="main">
          <div className="navbar">
            <h3>Home</h3>
            <h3>Messages</h3>
            <h3>Groups</h3>
            <h3>Contacts</h3>
          </div>
          <div className="thread-box">
            <div className="thread-header">HEADER</div>
            <div className="thread-body">
              BODY
              <div className="chat-box">
                <Thread />
              </div>
            </div>
            <div className="thread-input">INPUT</div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
