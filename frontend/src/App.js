import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import { Switch, Route, Link } from "react-router-dom";
import actions from "./api";
import DirectMessages from "./components/DirectMessages.js";
import Contacts from "./components/Contacts.js";

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
            <Link to="/">Home</Link>
            <Link to="/direct-messages">Messages</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
          <div className="thread-box">
            <div className="thread-header">HEADER</div>
            <div className="thread-body">
              <div className="chat-box">
                <Contacts />
              </div>
            </div>
            <div className="thread-input">INPUT</div>
          </div>
        </div>

        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/direct-messages' render={(props) => <DirectMessages {...props} />} />
          <Route exact path='/auth' render={(props) => <Auth setUser={this.setUser} {...props} />} />
          <Route exact path='/profile' render={(props) => <Profile user={this.state.user} setUser={this.setUser} {...props} />} />

        </Switch>

      </div>
    );
  }
}
export default App;
