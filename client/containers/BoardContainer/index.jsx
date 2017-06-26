import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory';

import store from '../../redux/store';
import { listRequest, listAdd } from '../../redux/actions/listActions';
import { cardRequest, cardUpdate} from '../../redux/actions/cardActions';
import { Board, CardModal, Nav } from '../../components/';

const _ = require('lodash');
const moment = require('moment');

class BoardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listFormVisible: false,
            newList: {
                name: ''
            }, 
            editableCard: ''
        }
    }

    addList() {
        let newList = Object.assign({}, this.state.newList);
        if (!newList.name) {
            newList.name = 'Untitled List';
        }

        let { activeBoard } = this.props;

        newList.boardId = activeBoard._id;

        this.props.listAdd(newList);

        this.setState({
            newList: { name: '' }
        });
    }

    handleCancelEditCard() {
        this.setState({
            editableCard: '',
            modalVisible: false
        });
    }

    handleCardClick(card) {
        let editableCard = Object.assign({}, card);
        editableCard.dueDate = moment(editableCard.dueDate).format('YYYY-MM-DD');
        this.setState({
            editableCard: editableCard,
            modalVisible: true
        });
    }

    handleContentChange(e) {
        let editableCard = this.state.editableCard;
        let updatedCard = Object.assign({}, editableCard);
        updatedCard.content = e.target.value;
        this.setState({
            editableCard: updatedCard
        });
    }

    handleDueDateChange(e) {
        let editableCard = this.state.editableCard;
        let updatedCard = Object.assign({}, editableCard);
        updatedCard.dueDate = e.target.value;
        this.setState({
            editableCard: updatedCard
        });
    }

    handleSaveEditCard() {
        let editableCard = this.state.editableCard;
        let updatedCard = Object.assign({}, editableCard);
        updatedCard.dueDate = e.target.value;
        this.props.cardUpdate(updatedCard);
        this.handleCancelEditCard();
    }

    handleNewListNameChange(e) {
        let newList = Object.assign({}, this.state.newList);
        newList.name = e.target.value;
        this.setState({
            newList
        });
    }

    handleSaveEditCard() {
        let editableCard = this.state.editableCard;
        let updatedCard = Object.assign({}, editableCard);
        this.props.cardUpdate(updatedCard);
        this.handleCancelEditCard();
    }

    hideNewListForm() {
        let self = this;
        setTimeout(() => { self.setState({ listFormVisible: false }) }, 100);
    }

    showNewListForm() {
        this.setState({
            listFormVisible: true
        });
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
        } else if (!this.props.activeBoard) {
            this.props.history.push(`/home`);
        } else {
            this.props.listRequest(this.props.activeBoard._id).then(
                () => {
                    let idList = _.map(this.props.lists, '_id');
                    this.props.cardRequest(token, idList).then();
                }
            )
        }
    }

    render() {
        let user = JSON.parse(localStorage.getItem('user'));
        let { editableCard, listFormVisible, newList } = this.state;
        let { lists, activeBoard } = this.props;

        let addList = this.addList.bind(this);
        let handleNewListNameChange = this.handleNewListNameChange.bind(this);
        let hideNewListForm = this.hideNewListForm.bind(this);
        let showNewListForm = this.showNewListForm.bind(this);

        let handleCancelEditCard = this.handleCancelEditCard.bind(this);
        let handleCardClick = this.handleCardClick.bind(this);
        let handleContentChange = this.handleContentChange.bind(this);
        let handleDueDateChange = this.handleDueDateChange.bind(this);
        let handleSaveEditCard = this.handleSaveEditCard.bind(this);

        return (
            <div>
                <Nav user={user} logOut={this.logOut} />
                <Board
                    activeBoard={activeBoard}
                    lists={lists}
                    user={user}

                    listFormVisible={listFormVisible}
                    newList={newList}
                    addList={addList}
                    handleNewListNameChange={handleNewListNameChange}
                    hideNewListForm={hideNewListForm}
                    showNewListForm={showNewListForm}

                    handleCardClick={handleCardClick}
                />
                {!!editableCard && <CardModal
                    editableCard = {editableCard}

                    handleCancelEditCard={handleCancelEditCard}
                    handleContentChange={handleContentChange}
                    handleDueDateChange={handleDueDateChange}
                    handleSaveEditCard={handleSaveEditCard}
                />}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        lists: store.lists.list,
        activeBoard: store.boards.activeBoard,
    };
};

export default connect(mapStateToProps, { listRequest, listAdd, cardRequest, cardUpdate })(BoardContainer);