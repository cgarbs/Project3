import React, { Component } from "react";
import actions from "../api";
import CreateServer from "./CreateServer.js";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    servers: [],
  };

  async componentDidMount() {
    let res = await actions.getServers();
    this.setState({ servers: res.data });
  }

  showServers = () => {
    return this.state.servers.map((eachServer) => {
      return (
        <Link to={`/server/${eachServer._id}`} key={eachServer._id}>
          {eachServer.title}
        </Link>
      );
    });
  };

  render() {
    return (
        <div className="navbar">
          <h1>Messages</h1>
          <div className="servers">
            <h1>Servers</h1>
            {this.showServers()}
          </div>
          <CreateServer />
        </div>
    );
  }
}

export default NavBar;
