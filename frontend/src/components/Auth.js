import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login'
import actions from '../api';
class Auth extends Component {

    responseGoogle = (response) => {
        console.log('!!!!!', this.props)
        actions.logIn(response).then(user => {
        if (this.props) {this.props.setUser(user)}
        })
        .catch(err => console.log(err))
    }

    render() {
            return (
    
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_KEY}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
    
            );
    }
}

export default Auth;