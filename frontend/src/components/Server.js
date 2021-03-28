import React, { Component } from "react";
// import actions from "../api";

class Server extends Component {
  state = {
    servers: [],
    header: "",
    messages: [],
    input: "",
    userList: [],
  };

  // async componentWillReceiveProps() {
  //   //Use the ID to go to DB to get this server's details
  //   console.log(this, this.props.match.params.id);
  //   let res = await actions.getServerThread(this.props.match.params.id);
  //   console.log(res);
  // }

  render() {
    return (
      <div className="main">
        <div className="thread-box">
          <div className="thread-header">HEADER</div>
          <div className="thread-body">   
            <div className="chat-box">CHATBOX</div>
          </div>
          <div className="user-list"></div>
          <div className="thread-input">INPUT</div>
        </div>
      </div>
    );
  }
}


export default Server;
