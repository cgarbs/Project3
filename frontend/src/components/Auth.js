import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login'
import actions from '../api';
class Auth extends Component {

    responseGoogle = async (response) => {
        let user = await actions.logIn(response)
        if (this.props) this.props.setUser(user)
    }

    // reRoute = () => {
    //     return this.props.history.push('/server')
    // }

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