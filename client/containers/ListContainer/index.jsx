import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';

import store from '../../redux/store';
import { cardAdd, cardRequest, cardSelect, cardUpdate } from '../../redux/actions/cardActions';
import { listSelect } from '../../redux/actions/listActions';
import { List } from '../../components/';

const moment = require('moment');

class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardFormVisible: false,
            newCard: {
                content: ''
            },
            draggedCardHeight: 105
        }
    }

    addCard() {
        let newCard = Object.assign({}, this.state.newCard);
        if (!newCard.content) {
            newCard.content = 'Blank Card';
        }

        let { list } = this.props;

        newCard.dueDate = moment().add(1, 'days');
        newCard.listId = list._id;
        newCard.position = 0;

        this.props.cardAdd(newCard);

        this.setState({
            newCard: { content: '' }
        });
    }

    handleCardDrop(e) {
        let dragTarget = this.props.dragTarget;
        let draggedCard = this.props.draggedCard;
        let updatedCard = Object.assign({}, draggedCard);
        updatedCard.listId = dragTarget._id;

        if (!!dragTarget) {
            if (dragTarget._id != draggedCard.listId) {
                this.props.cardUpdate(updatedCard);
                this.props.listSelect({});
                this.props.cardSelect({});
            }
        }
    }

    handleDragCardEnterList(e) {
        e.preventDefault();
        if (e.target.classList.contains('list')) {
            let list = this.props.list;
            if (this.props.dragTargetId != list) {
                this.props.listSelect(list);
            }
        }
    }

    handleDragEnd(e) {
        this.props.listSelect('');
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    handleDragStart(card, h) {
        let draggedCard = Object.assign({}, card);
        this.props.cardSelect(draggedCard);
    }

    handleNewCardContentChange(e) {
        let newCard = Object.assign({}, this.state.newCard);
        newCard.content = e.target.value;
        this.setState({
            newCard
        });
    }

    hideCardForm() {
        let self = this;
        setTimeout(() => { self.setState({ cardFormVisible: false }) }, 100);
    }

    showCardForm() {
        this.setState({
            cardFormVisible: true
        });
    }

    render() {
        let { cards, dragTarget, list, handleCardClick} = this.props;
        let { cardFormVisible, draggedCardHeight, newCard } = this.state;

        let addCard = this.addCard.bind(this);
        let handleCardDrop = this.handleCardDrop.bind(this);
        let handleDragCardEnterList = this.handleDragCardEnterList.bind(this);
        let handleDragOver = this.handleDragOver.bind(this);
        let handleDragStart = this.handleDragStart.bind(this);
        let handleNewCardContentChange = this.handleNewCardContentChange.bind(this);
        let hideCardForm = this.hideCardForm.bind(this);
        let showCardForm = this.showCardForm.bind(this);

        return (
            <List
                cards={cards}
                cardFormVisible={cardFormVisible}
                dragTarget = {dragTarget}
                draggedCardHeight = {draggedCardHeight}
                list={list}
                newCard={newCard}

                addCard={addCard}
                handleCardClick={handleCardClick}
                handleCardDrop={handleCardDrop}
                handleDragCardEnterList={handleDragCardEnterList}
                handleDragOver={handleDragOver}
                handleDragStart={handleDragStart}
                handleNewCardContentChange={handleNewCardContentChange}
                hideCardForm={hideCardForm}
                showCardForm={showCardForm}
            />
        );
    }
}

const mapStateToProps = store => {
    return {
        cards: store.cards.list,
        dragTarget: store.lists.dragTarget,
        draggedCard: store.cards.draggedCard
    };
};

export default connect(mapStateToProps, { cardAdd, cardRequest, cardSelect, cardUpdate, listSelect })(ListContainer);