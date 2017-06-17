import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';

import store from '../../redux/store';
import { Login } from '../../components/';

class LoginContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <Login/>
        );
    }
}

const mapStateToProps = store => {
  return {
    
  };
};

export default LoginContainer;
// export default connect(mapStateToProps)(HomeContainer);