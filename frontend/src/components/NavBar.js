import React, { Component } from "react";
import actions from "../api";
import ThreadBox from "./ThreadBox.js";
import CreateServer from "./CreateServer.js";
import "../App.css";
import { Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {

    state = {
        messsages: [],
        servers: [],
        serverThread: {}
    }

    async componentDidMount() {
        // let res = await axios.get(`http://localhost:5000/api/getPosts`)
        // console.log(res)
        let res = await actions.getServers();
        this.setState({ servers: res.data });
      }
    
      showServers = () => {
        return this.state.servers.map((eachServer) => {
          return (
            <Link to={`/${eachServer._id}`} key={eachServer._id}>
              {eachServer.title}
            </Link>
          );
        });
      };

    showServerThread = () => {
        return this.state.servers.map((eachServer) => {
            return (
              <p key={eachServer._id}>{eachServer.messages} {eachServer.title}</p>
            );
          });
    }


  render() {
    return (
      <div className="navbar">
        <h1>Messages</h1>
        <h1>Servers</h1>
        <div>{this.showServerThread()}</div>
        <div className="servers">{this.showServers()}</div>
        <CreateServer />
      </div>
    );
  }
}

export default NavBar;
