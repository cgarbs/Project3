import React, { Component } from "react";
import actions from "../api";

class ThreadBox extends Component {
  state = {
    header: "",
    messages: [],
    message: '',
    input: "",
    userList: [],
  };

  createThread() {
    actions.getServerThread(this.props.match.params.id).then(res => {
      console.log(res.data);
      if (this.state.header !== res.data.title)
      this.setState({ header: res.data.title, messages: res.data.messages, userList: res.data.users });
    })
  }

  showHeader = () => {
    return this.state.header
  };

  showMessages = () => {
    return this.state.messages
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let res = await actions.sendMessage(this.state)
}

  showUserList = () => {
    return this.state.userList
  }

  render() {
    {this.createThread()}
    return (
      <div className="main">
        <div className="thread-box">
          <div className="thread-header">{this.showHeader()}</div>
          <div className="thread-body">   
            <div className="chat-box">{this.showMessages()}</div>
          </div>
          <div className="user-list">{this.showUserList()}</div>
          <div className="thread-input">
            <form onSubmit={this.handleSubmit} >
              <input onChange={(e) => this.setState({ message: e.target.value })} name="message" type="text" placeholder="Send a Message" />
              <button> ✈ </button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default ThreadBox;
