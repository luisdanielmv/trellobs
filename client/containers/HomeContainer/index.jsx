import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';

import store from '../../redux/store';
import { boardAdd, boardRequest, boardSelect } from '../../redux/actions/boardActions';
import { Home, Nav } from '../../components/';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardFormVisible: false,
            newBoard: {
                name: ''
            }
        }
    }

    addBoard() {
        let newBoard = Object.assign({}, this.state.newBoard);
        if (!newBoard.name) {
            newBoard.name = 'Untitled Board';
        }

        let token = localStorage.getItem('jwt');
        let user = JSON.parse(localStorage.getItem('user'));

        newBoard.ownerId = user._id;
        newBoard.members = [user._id];
        newBoard.members = 'private';
        newBoard.background = "Color-class"

        this.props.boardAdd(token, newBoard);

        this.setState({
            newBoard: { name: '' }
        });
    }

    handleNewBoardNameChange(e) {
        let newBoard = Object.assign({}, this.state.newBoard);
        newBoard.name = e.target.value;
        this.setState({
            newBoard
        });
    }

    showNewBoardForm() {
        this.setState({
            boardFormVisible: true
        });
    }

    hideNewBoardForm() {
        let self = this;
        setTimeout(() => { self.setState({ boardFormVisible: false }) }, 100);
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

    render() {
        let user = JSON.parse(localStorage.getItem('user'));
        let boardSelect = this.boardSelect.bind(this);
        let { boards } = this.props;

        let { boardFormVisible, newBoard } = this.state;
        let showNewBoardForm = this.showNewBoardForm.bind(this);
        let hideNewBoardForm = this.hideNewBoardForm.bind(this);
        let handleNewBoardNameChange = this.handleNewBoardNameChange.bind(this);
        let addBoard = this.addBoard.bind(this);
        return (
            <div>
                <Nav user={user} logOut={this.logOut}/>
                <Home
                    boards={boards}
                    boardSelect={boardSelect}

                    boardFormVisible = {boardFormVisible}
                    newBoard = {newBoard}
                    showNewBoardForm = {showNewBoardForm}
                    hideNewBoardForm = {hideNewBoardForm}
                    handleNewBoardNameChange = {handleNewBoardNameChange}
                    addBoard = {addBoard}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        boards: store.boards.list,
        user: store.auth.user
    };
};

export default connect(mapStateToProps, { boardAdd, boardRequest, boardSelect })(HomeContainer);
