import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';

import store from '../../redux/store';
import { listRequest } from '../../redux/actions/listActions';
import { Board, Nav } from '../../components/';

class BoardContainer extends Component {
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
        } else if(!this.props.activeBoardId) {
            this.props.history.push(`/home`);
        } else {
            this.props.listRequest(token, this.props.activeBoardId);
        }
    }

    render () {
        let user = JSON.parse(localStorage.getItem('user'));
        let { lists } = this.props;
        return (
            <div>
                <Nav user={user}/>
                <Board
                    user={user}
                    lists={lists}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
  return {
    lists: store.lists.list,
    activeBoardId: store.boards.activeBoardId
  };
};

export default connect(mapStateToProps, {listRequest})(BoardContainer);