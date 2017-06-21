import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import store from '../../redux/store';
import { loginRequest } from '../../redux/actions/authActions';
import { Login } from '../../components/';


class LoginContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    static propTypes = {
        loginRequest: func.isRequired
    }

    authenticate(credentials) {
        this.props.loginRequest(credentials)
        .then(
            () => {
                this.props.history.push('/home');
            }, 
            (error) => {
                console.log(error);
            }
        ).catch((error) => {console.log(error)})
    }

    render () {
        let authenticate = this.authenticate.bind(this);
        let {authenticated} = this.props;
        return (
            <Login authenticate = {authenticate}/>
        );
    }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    authenticated: store.authenticated
  };
};

export default connect(mapStateToProps, {loginRequest})(LoginContainer);