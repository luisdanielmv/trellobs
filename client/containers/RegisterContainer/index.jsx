import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';

import store from '../../redux/store';
import { Register } from '../../components/';

class RegisterContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <Register/>
        );
    }
}

const mapStateToProps = store => {
  return {
    
  };
};

export default RegisterContainer;
// export default connect(mapStateToProps)(HomeContainer);