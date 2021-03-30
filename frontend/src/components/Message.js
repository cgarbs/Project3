import React, { Component } from "react";
import actions from "../api";

class Message extends Component {
  state = {
    messages: [],
    input: "",
    userList: [],
  };

  async componentDidMount() {
    // console.log(this, this.props.match.params.id);
    // let res = await actions.getMessages(this.props.match.params.id);
    let res = await actions.getMessages();
    this.setState({ messages: res.data})
  }

  showMessages = () => {
    return this.state.messages.map((eachMessage) => {
      return (
        <h1 key={eachMessage._id}> {eachMessage.input} {eachMessage.from.email}</h1>
      );
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault()
    await actions.sendMessage(this.state)
}

  render() {
    return (
      <div className="main">
        <div className="thread-box">
          <div className="thread-header">HEADER</div>
          <div className="thread-body"> {this.showMessages()}  
            <div className="chat-box">
              <form onSubmit={this.handleSubmit} >
                <input onChange={(e) => this.setState({ input: e.target.value })} name="input" type="text" placeholder="Write Message" />
                <button> Send Message </button>
              </form>
            </div>
          </div>
          <div className="user-list"></div>
          <div className="thread-input">INPUT</div>
        </div>
      </div>
    );
  }
}


export default Message;
