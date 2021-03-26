import React, { Component } from "react";
import "../App.css";
import actions from '../api'
import { Switch, Route, Link } from "react-router-dom";

class ThreadBox extends Component {

    state = {
        servers: [],
        header: '',
        messages: [],
        input: '',
        userList: []
    }

    async componentDidMount() {
        // let res = await axios.get(`http://localhost:5000/api/getPosts`)
        // console.log(res)
        let res = await actions.getServers();
        this.setState({ servers: res.data });
      }

      // componentWillReceiveProps(props) {
      //   let thread = props.params._id
      // }
    
      showHeader = () => {
        // let first = this.state.servers.[0];
          // return this.state.servers.map((server) => {
          //   return <h1>{server.title}</h1>;
          // })
        //   let header = this.state.servers[0].title;
        //   return <h1>{header}</h1>
      }

  render() {
    // console.log('******', this.state.servers.[1])
    return (
      <div className="thread-box">
        <div className="thread-header">{this.showHeader()}</div>
        <div className="thread-body">
          <div className="chat-box">

          </div>
        </div>
        <div className="thread-input">INPUT</div>

      </div>
    );
  }
}

export default ThreadBox;
