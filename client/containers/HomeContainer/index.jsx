import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';

import store from '../../redux/store';
import { boardRequest } from '../../redux/actions/boardActions';
import { Home, Nav } from '../../components/';


class HomeContainer extends Component {
    constructor ( props ) {
        super( props )
    }

    logOut = () => {
        localStorage.clear();
        const customHistory = createBrowserHistory({
            forceRefresh: true
        });
        customHistory.push('/login');
    }

    componentWillMount() {
        let token = localStorage.getItem('jwt');
        if (!token) {
            this.logOut();
        } else {
            this.props.boardRequest(token);
        }
    }

    render () {
        let user = JSON.parse(localStorage.getItem('user'));
        let {boards} = this.props;
        return (
            <div>
                <Nav user={user}/>
                <Home boards={boards}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
  return {
    boards: store.boards,
    auth: store.auth
  };
};

export default connect(mapStateToProps, {boardRequest})(HomeContainer);