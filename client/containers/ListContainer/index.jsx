import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';

import store from '../../redux/store';
import { cardRequest, cardAdd } from '../../redux/actions/cardActions';
import { List } from '../../components/';

const moment = require('moment');

class ListContainer extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            cardFormVisible: false,
            newCard: {
                content: ''
            }
        }
    }

    handleNewCardContentChange(e) {
        let newCard = Object.assign({}, this.state.newCard);
        newCard.content = e.target.value;
        this.setState({
            newCard
        });
    }

    showCardForm() {
        this.setState({
            cardFormVisible: true
        });
    }

    hideCardForm() {
        let self = this;
        setTimeout(() => {self.setState({cardFormVisible: false})}, 100);
    }

    addCard() {
        let token = localStorage.getItem('jwt');
        let {list} = this.props;
        let newCard = Object.assign({}, this.state.newCard);
        newCard.dueDate = moment().add(7, 'days');
        newCard.listId = list._id;
        newCard.position = 0;

        console.log(newCard);
        this.props.cardAdd(token, newCard);
        
        this.setState({
            newCard: {content:''}
        });
    }

    componentWillMount() {
        let {list} = this.props;
        let token = localStorage.getItem('jwt');
        this.props.cardRequest(token, this.props.list._id);
    }

    render () {
        let { list } = this.props;
        let { cards } = this.props;
        let { cardFormVisible, newCard } = this.state;
        let showCardForm = this.showCardForm.bind(this);
        let hideCardForm = this.hideCardForm.bind(this);
        let handleNewCardContentChange = this.handleNewCardContentChange.bind(this);
        let addCard = this.addCard.bind(this);

        return (
            <List 
                list={list}
                cards={ cards }
                hideCardForm = {hideCardForm}
                showCardForm = {showCardForm}
                cardFormVisible = {cardFormVisible}
                handleNewCardContentChange = {handleNewCardContentChange}
                newCard = {newCard}
                addCard = {addCard}
            />
        );
    }
}

const mapStateToProps = store => {
  return {
      cards: store.cards.list
  };
};

export default connect(mapStateToProps, {cardRequest, cardAdd})(ListContainer);