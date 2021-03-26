import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import actions from "./api";

import NavBar from "./components/NavBar.js";
import ThreadBox from "./components/ThreadBox.js";
import TopBar from "./components/TopBar.js";
import CreateServer from "./components/CreateServer.js";

import Home from "./components/Home";
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
        <TopBar />
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
            path="/thread"
            render={(props) => <ThreadBox {...props} />}
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
