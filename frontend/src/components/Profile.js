import React, { Component } from 'react';
// import actions from '../api'

class Profile extends Component {

    state = {
    }

    logOut = () => {
        localStorage.removeItem('token')
        this.props.setUser({})
        this.props.history.push('/')
    }

    render() {
        console.log(this)
        return (
            <div className="profile">
                <div className="profile-container">
                    <h3>PROFILE</h3>
                    <h2>{this.props.user?.email}</h2>
                    <button onClick={this.logOut}>Log out</button>
                </div>
            </div>
        );
    }
}

export default Profile;