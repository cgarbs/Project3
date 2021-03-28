import React, { Component } from 'react';
import actions from '../api'

class Profile extends Component {

    state = {
        posts: []
    }

    logOut = () => {
        localStorage.removeItem('token')
        this.props.setUser({})
        this.props.history.push('/')
    }

    render() {
        console.log(this)
        return (
            <div>
                Profile

                <h2>{this.props.user?.email}</h2>
                {/* {this.showMyPosts()} */}
                <button onClick={this.logOut}>Log out</button>
            </div>
        );
    }
}

export default Profile;