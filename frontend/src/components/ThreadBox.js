import React, { Component } from "react";
import actions from "../api";

class ThreadBox extends Component {
  state = {
    header: "",
    messages: [],
    from: [],
    timestamps: [],
    threads: [],
    message: {},
    userList: [],
    allUsers: [],
    toggle: false
  };

  async componentDidMount() {
    let res = await actions.getUsers();
    const allUsers = res.data.map(e => <button>{e._id}</button>)
    this.setState({ allUsers: allUsers });
  }

  createThread() {
    actions.getServerThread(this.props.match.params.id).then(res => {

      const messagesArray = [...res.data.messages].map(e => e.input)
      const fromArray = [...res.data.messages].map(e => e.from.email)
      const dateArray = [...res.data.messages].map(e => e.date)
      const usersArray = [...res.data.users].map(e => e.email)

      const threadArray = res.data.messages.map(e => 
        <div key={e._id} className='thread'>
          <div className='thread-container'>
            <div className="thread-info">
              <div className='thread-from'>{e.from.email}:</div> 
              <div className='thread-date'>{e.date}</div>
            </div>
          <div className='thread-text'>{e.input}</div> 

          </div>
        </div>)
      if (this.state.header !== res.data.title)
      this.setState({ header: res.data.title, messages: messagesArray, from: fromArray, timestamps: dateArray, threads: threadArray, userList: usersArray });
    })
  }

  showHeader = () => {
    return this.state.header
  };

  showMessages = () => {
    return this.state.threads;
  }

  handleSubmit = async (event) => {
    console.log('BEFORE!!!', this.state.messages)
    // event.preventDefault()
    actions.sendInput(this.props.match.params.id, this.state.message)
    console.log('AFTER!!!', this.state.messages)
}

  showUserList = () => {
    return this.state.userList
    // return this.state.allUsers
  }

  showAllUsers = () => {
    return this.state.allUsers
  }

  toggleUsers = () => {
    // e.preventDefault()
    // this.setState(prevState => ({ toggle: !prevState.toggle }));
    console.log('TOGGLE IS', this.state.toggle)
  }

  render() {
    {this.createThread()}
    return (
      <div className="main-box">
        <div className="thread-box">
          <div className="thread-header">{this.showHeader()}</div>
          <div className="thread-body"> {this.showMessages()}</div>
          <div className="thread-input">
            <form onSubmit={this.handleSubmit} >
              <input onChange={(e) => this.setState({ message: e.target.value })} name="input" type="text" placeholder="Send a Message" />
              <button> SEND </button>
            </form>
          </div>
        </div>
        <div className="user-container">
          <div className="users-header">USERS</div>
          <div className="users-list">{this.showUserList()}</div>
          <div className="users-footer"> <button onClick={() => this.forceUpdate}>ADD USERS</button> </div>
        </div>
      </div>
    );
  }
}

export default ThreadBox;
