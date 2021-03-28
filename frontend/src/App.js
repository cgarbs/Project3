import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import actions from "./api";

import NavBar from "./components/NavBar.js";
import ThreadBox from "./components/ThreadBox.js";
import TopBar from "./components/TopBar.js";
import CreateServer from "./components/CreateServer.js";
import Server from "./components/Server.js";

import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from "./components/Profile";



class App extends Component {
  state = {
    user: {},
    loggedIn: false,
  };

  async componentDidMount() {
    let user = await actions.getUser();
    console.log("user is ", user);
    this.setState({ user, loggedIn: true });
  }

  reroute = () => {
    if(this.state.loggedIn === true) {
      return <Redirect to="/server"/>
    }
  }

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        {this.state.user?.email && 
        <div className="clientPage">
          <TopBar />
          <div className="main position">
            <NavBar />
            <Switch>
              <Route exact path="/server" render={(props) => <Server {...props} />} />
              <Route exact path="/server/:id" render={(props) => <ThreadBox {...props} />} />
              <Route exact path="/create-server" render={(props) => <CreateServer {...props} />} />
              <Route exact path="/auth" render={(props) => <Auth setUser={this.setUser} {...props} />} />
              <Route exact path="/profile" render={(props) => ( <Profile user={this.state.user} setUser={this.setUser} {...props} /> )} />
            </Switch>
          </div>
        </div>}
        <div className="publicLanding">
          <Route exact path="/" render={(props) => <Home {...props} />} />
          {this.state.loggedIn && this.reroute()}
        </div>
      </div>
    );
  }
}
export default App;
