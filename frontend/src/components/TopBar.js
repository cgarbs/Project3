import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="title">
          <h1><Link to="/">PANDA-CHAT</Link></h1>
        </div>
        <div className="search-bar">
          <h1>
            <input placeholder="Search"></input>
          </h1>
        </div>
        <div className="profile-options">
        <h1><Link to="/profile">PROFILE</Link></h1>
        </div>
      </div>
    );
  }
}

export default TopBar;
