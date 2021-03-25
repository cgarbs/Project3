import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import actions from "./api";
import ThreadBox from "./components/ThreadBox.js";
import NavBar from "./components/NavBar.js";
import CreateServer from "./components/CreateServer.js";

import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Auth from "./components/Auth";
import Profile from "./components/Profile";

// Testing Git Pull/Push

class App extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    let user = await actions.getUser();
    console.log("user is ", user);
    this.setState({ user });
  }

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
          <NavBar />
          <ThreadBox />
        </div>
        <div>
          <Auth />
        </div>

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/create-server"
            render={(props) => <CreateServer {...props} />}
          />
          <Route
            exact
            path="/:id"
            render={(props) => <NavBar {...props} />}
          />
          <Route
            exact
            path="/add-post"
            render={(props) => <AddPost {...props} />}
          />
          <Route
            exact
            path="/auth"
            render={(props) => <Auth setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                user={this.state.user}
                setUser={this.setUser}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
