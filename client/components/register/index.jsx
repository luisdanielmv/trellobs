import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';
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

    render() {
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
                                    
                                    <input type='text' className='form-control' name='firstname' placeholder='First name' />
                                </div>
                                <div className="form-group">
                                    
                                    <input type='text' className='form-control' name='lastname' placeholder='Last name' />
                                </div>
                                <div className="form-group">
                                    
                                    <input type='text' className='form-control' name='username' placeholder='Username' />
                                </div>
                                <div className="form-group">
                                    
                                    <input type='email' className='form-control' name='email' placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <figure>
                                        <img src={pIcon} alt='Trello' />
                                    </figure>
                                    <input type='password' className='form-control' name='password' placeholder='Password' />
                                </div>
                                <button className="btn btn-primary">LOG IN</button>
                            </form>
                            <div className='login__or'>
                                <span>OR</span>
                            </div>
                            <div className="login__createNew">
                                <a href="#">Create a Trello account</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="potato">
                    <div className='hidden-xs hidden-sm col-md-7 login__filler'></div>
                </div>
            </div>
        );
    }
}

export default Register;