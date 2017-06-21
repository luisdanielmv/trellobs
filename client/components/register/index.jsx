import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { func } from 'prop-types';
import axios from 'axios';

import Card from '../card';
import Details from '../details';

import logo from './img/trello.svg';
import uIcon from './img/username.svg';
import pIcon from './img/password.svg';
import bgImg from './img/login-bg2.jpg';

require('./register.scss');

class Register extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        onSubmit: func.isRequired,
        handleFirstNameChange: func.isRequired,
        handleLastNameChange: func.isRequired,
        handleUsernameChange: func.isRequired,
        handleEmailChange: func.isRequired,
        handlePasswordChange: func.isRequired
    }

    render() {
        let { credentials, errors, onSubmit, handleFirstNameChange, handleLastNameChange, handleUsernameChange, handleEmailChange, handlePasswordChange } = this.props;
        let { firstName, lastName, username, email, password } = credentials;
        return (
            <div className='row'>
                <div className='col-xs-12 col-md-5 signup'>
                    <div className="signup__wrapper">
                        <div className="signup-content">
                            <figure className='signup__logo'>
                                <img src={logo} alt='Trello' />
                            </figure>
                            <form className='signup__form'>
                                <div className="form-group">
                                    
                                    <input type='text' className='form-control' name='firstname' placeholder='First name' onChange={handleFirstNameChange} value={firstName} />
                                    {errors.firstName && <span className="help-block">This is an error notification</span>}
                                </div>
                                <div className="form-group">
                                    
                                    <input type='text' className='form-control' name='lastname' placeholder='Last name' onChange={handleLastNameChange} value={lastName} />
                                    {errors.lastName && <span className="help-block">This is an error notification</span>}
                                </div>
                                <div className="form-group">

                                    <input type='text' className='form-control' name='username' placeholder='Username' onChange={handleUsernameChange} value={username} />
                                    {errors.username && <span className="help-block">This is an error notification</span>}
                                </div>
                                <div className="form-group">

                                    <input type='email' className='form-control' name='email' placeholder='Email' onChange={handleEmailChange} value={email} />
                                    {errors.email && <span className="help-block">This is an error notification</span>}
                                </div>
                                <div className="form-group">

                                    <input type='password' className='form-control' name='password' placeholder='Password' onChange={handlePasswordChange} value={password} />
                                    {errors.password && <span className="help-block">This is an error notification</span>}
                                </div>
                                <button onClick={onSubmit} type='submit' className="btn btn-primary">LOG IN</button>
                            </form>
                            <div className='signup__or'>
                                <span>OR</span>
                            </div>
                            <div className="signup__createNew">
                                <a href="#">Create a Trello account</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filler-wrapper">
                    <div className='hidden-xs hidden-sm col-md-7 signup__filler'></div>
                </div>
            </div>
        );
    }
}

export default Register;