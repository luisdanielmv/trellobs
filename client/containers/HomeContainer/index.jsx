import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';

import store from '../../redux/store';
import { boardRequest, boardSelect } from '../../redux/actions/boardActions';
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

    boardSelect(board) {
        this.props.boardSelect(board);
        this.props.history.push(`/board?id=${board._id}`);
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
        let boardSelect = this.boardSelect.bind(this);
        let { boards } = this.props;
        return (
            <div>
                <Nav user={user}/>
                <Home 
                    boards={boards}
                    boardSelect = {boardSelect}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
  return {
    boards: store.boards.list,
    auth: store.auth
  };
};

export default connect(mapStateToProps, {boardRequest, boardSelect})(HomeContainer);