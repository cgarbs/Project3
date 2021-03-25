import React, { Component } from 'react';
import actions from '../api';


class ServerThread extends Component {

    state = {
        thread: {},
      };
    
      async componentDidMount() {
        let res = await actions.getServerThread();
        this.setState({ thread: res.data });
      }
    
    render() {
        console.log(this.state);
        return (
            <div>
                
            </div>
        );
    }
}

export default ServerThread;