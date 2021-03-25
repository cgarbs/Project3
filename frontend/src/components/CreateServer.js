import React, { Component } from "react";
import actions from '../api';

// const serverURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_URL : `http://localhost:5000/api`


class CreateServer extends Component {
  state = {
    title: "",
    messages: "",
  }

handleSubmit = async (event) => {
    event.preventDefault()
    // let res = await axios.post(`http://localhost:5000/api/addAPost`, this.state)

    let res = await actions.createServer(this.state)

}

render() {
    console.log(this.state)
    return (
        <div className="server-form">

            <form onSubmit={this.handleSubmit} >
                <input onChange={(e) => this.setState({ title: e.target.value })} name="title" type="text" placeholder="Server Title" />
                <input onChange={(e) => this.setState({ messages: e.target.value })} name="messages" type="text" placeholder="Welcome Message" />
                <button> Create Server </button>
            </form>
        </div>
    );
}
}

export default CreateServer;
