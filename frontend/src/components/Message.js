import React, { Component } from "react";
// import actions from "../api";

class Message extends Component {
  state = {
    messages: [],
    input: "",
    userList: [],
  };

//   async componentDidMount() {
//     // console.log(this, this.props.match.params.id);
//     // let res = await actions.getMessages(this.props.match.params.id);
//     let res = await actions.getMessages();
//     this.setState({ messages: res.data})
//   }

//   showMessages = () => {
//     return this.state.messages.map((eachMessage) => {
//       return (
//         <h1 key={eachMessage._id}> {eachMessage.input} {eachMessage.from.email}</h1>
//       );
//     });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault()
//     await actions.sendMessage(this.state)
// }

  render() {
    return (
        <div className='welcome'>
          <h1>Welcome!</h1>
          <img src={"panda.png"} alt="panda"></img>
        </div>
    );
  }
}


export default Message;