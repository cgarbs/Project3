import React, { Component } from 'react';
import actions from '../api'

class Contacts extends Component {
    
    state = {
        posts: []
    }

    async componentDidMount() {
        // let res = await axios.get(`http://localhost:5000/api/getPosts`)
        // console.log(res)
        let res = await actions.getUsers()
        this.setState({ posts: res.data })
    }

    getUsers = () => {
        return this.state.posts.map(eachUser => {
            return <li key={eachUser._id}> {eachUser.email} </li>
        })
    }

    render() {
        return (
            <div>
                Contacts
                {this.getUsers()}
            </div>
        );
    }
}

export default Contacts;