import React, { Component } from "react";
import actions from '../api'
const testArray = ["test", "blah", "one", "two", "three", "four", "five"];

class Thread extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        // let res = await axios.get(`http://localhost:5000/api/getPosts`)
        // console.log(res)
        let res = await actions.getPosts()
        this.setState({ posts: res.data })
    }

    showPosts = () => {
        return this.state.posts.map(eachPost => {
            return <li key={eachPost._id}> {eachPost.message} </li>
        })
    }

    render() {
        return (
            <div>
                Thread
                {this.showPosts()}
            </div>
        );
    }
}

export default Thread;
