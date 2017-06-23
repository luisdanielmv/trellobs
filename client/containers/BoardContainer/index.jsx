import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';

import store from '../../redux/store';
import { listRequest, listAdd } from '../../redux/actions/listActions';
import { cardRequest } from '../../redux/actions/cardActions';
import { Board, Nav } from '../../components/';

var _ = require('lodash');

class BoardContainer extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            listFormVisible: false,
            newList: {
                name: ''
            }
        }
    }

     addList() {
        let newList = Object.assign({}, this.state.newList);
        if (!newList.name) {
            newList.name = 'Untitled List';
        }
        let token = localStorage.getItem('jwt');
        let {activeBoardId} = this.props;
        
        newList.boardId = activeBoardId;

        this.props.listAdd(token, newList);
        
        this.setState({
            newList: {name: ''}
        });
    }

    handleNewListNameChange(e) {
        let newList = Object.assign({}, this.state.newList);
        newList.name = e.target.value;
        this.setState({
            newList
        });
    }

    showNewListForm() {
        this.setState({
            listFormVisible: true
        });
    }

    hideNewListForm() {
        let self = this;
        setTimeout(() => {self.setState({listFormVisible: false})}, 100);
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
            this.props.listRequest(token, this.props.activeBoardId).then(
                () => {
                    let idList = _.map(this.props.lists, '_id');
                    this.props.cardRequest(token, idList);
                }
            )
        }
    }

    render () {
        let {listFormVisible, newList} = this.state;
        let user = JSON.parse(localStorage.getItem('user'));
        let { lists } = this.props;
        let addList = this.addList.bind(this);
        let handleNewListNameChange = this.handleNewListNameChange.bind(this);
        let hideNewListForm = this.hideNewListForm.bind(this);
        let showNewListForm = this.showNewListForm.bind(this);
        return (
            <div>
                <Nav user={user} logOut={this.logOut}/>
                <Board
                    user={user}
                    lists={lists}

                    listFormVisible = {listFormVisible}
                    newList = {newList}
                    addList = {addList}
                    handleNewListNameChange = {handleNewListNameChange}
                    hideNewListForm = {hideNewListForm}
                    showNewListForm = {showNewListForm}
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

export default connect(mapStateToProps, {listRequest, listAdd, cardRequest})(BoardContainer);