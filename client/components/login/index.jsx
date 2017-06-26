import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';
import axios from 'axios';

import Card from '../card';
import Details from '../details';

import logo from './img/trello.svg';
import uIcon from './img/username.svg';
import pIcon from './img/password.svg';
import bgImg from './img/login-bg2.jpg';

require('./login.scss');

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleUsernameChange(e) {
        let newCredentials = Object.assign({}, this.state.credentials);
        newCredentials.username = e.target.value;
        this.setState({credentials: newCredentials});
    }

    handlePasswordChange(e) {
        let newCredentials = Object.assign({}, this.state.credentials);
        newCredentials.password = e.target.value;
        this.setState({credentials: newCredentials});
    }

    authenticate(e) {
        e.preventDefault();
        let credentials = Object.assign({}, this.state.credentials);
        this.props.authenticate(credentials);
    }

    render() {
        let {credentials} = this.state;
        let handleUsernameChange = this.handleUsernameChange.bind(this);
        let handlePasswordChange = this.handlePasswordChange.bind(this);
        let authenticate = this.authenticate.bind(this);
        return (
            <div className='row'>
                <div className='col-xs-12 col-md-5 login'>
                    <div className="login__wrapper">
                        <div className="login-content">
                            <figure className='login__logo'>
                                <img src={logo} alt='Trello' />
                            </figure>
                            <form className='login__form'>
                                <div className="form-group">
                                    <figure>
                                        <img src={uIcon} alt='Trello' />
                                    </figure>
                                    <input type='text' className='form-control' name='username' placeholder='Username or Email' onChange={handleUsernameChange} value={credentials.username}/>
                                </div>
                                <div className="form-group">
                                    <figure>
                                        <img src={pIcon} alt='Trello' />
                                    </figure>
                                    <input type='password' className='form-control' name='password' placeholder='Password' onChange={handlePasswordChange} value={credentials.password}/>
                                </div>
                                <button onClick={authenticate} className="btn btn-primary" type='submit'>LOG IN</button>
                            </form>
                            <div className='login__or'>
                                <span>OR</span>
                            </div>
                            <div className="login__createNew">
                                <Link to='/register'>Create a Trello account</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filler-wrapper">
                    <div className='hidden-xs hidden-sm col-md-7 login__filler'></div>
                </div>
            </div>
        );
    }
}

export default Login;