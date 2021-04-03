import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import actions from "./api";

import NavBar from "./components/NavBar.js";
import ThreadBox from "./components/ThreadBox.js";
import TopBar from "./components/TopBar.js";
import CreateServer from "./components/CreateServer.js";
import Message from "./components/Message.js";

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

  setUser = (user) => {
    this.setState({ user });
  };

  reRoute = () => {
    if(this.state.user?.email) {
      return <Redirect to="/server" />
    }
  }

  
  render() {
    return (
      <div className="App">
        {this.state.user?.email && 
        <div className="client-page">
          <TopBar />
          <div className="main">
            <NavBar />
            <Switch>
              <Route exact path="/" render={(props) => <Message {...props} />} />
              <Route exact path="/server/:id" render={(props) => <ThreadBox {...props} />} />
              <Route exact path="/create-server" render={(props) => <CreateServer {...props} />} />
              <Route exact path="/auth" render={(props) => <Auth setUser={this.setUser} {...props} />} />
              <Route exact path="/profile" render={(props) => ( <Profile user={this.state.user} setUser={this.setUser} {...props} /> )} />
            </Switch>
          </div>
        </div>}
          {!this.state.user?.email &&
            <div className="public-landing">
          <Route exact path="/" render={(props) => <Home {...props} />} />
          {/* {this.reRoute()} */}
        </div>}
      </div>
    );
  }
}
export default App;


