import React, { Component } from "react";
import Auth from "./Auth";

class Home extends Component {

    render() {
        return (
            <div className="login-container">
                <h1>PANDA-CHAT</h1>
                <img src={'panda2.jpg'} alt="panda2"></img>
                <Auth />
            </div>
        );
    }
}

export default Home;
