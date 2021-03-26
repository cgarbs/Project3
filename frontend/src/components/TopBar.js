import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
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
    );
  }
}

export default TopBar;
