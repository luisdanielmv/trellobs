import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object} from 'prop-types';

import './home.scss';

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