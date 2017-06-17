import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object} from 'prop-types';
import axios from 'axios';

import './home.scss';
import Card from '../card';
import Details from '../details';

class Home extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <main className="f">
                <h1>Home</h1>   
            </main>
        );
    }
}

export default Home;