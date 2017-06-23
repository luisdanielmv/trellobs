import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';

import './list.scss';
import addIcon from './img/add-Icon.svg';

import Card from '../card';

var _ = require('lodash');

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { addCard, cards, cardFormVisible, handleNewCardContentChange, hideCardForm, list, newCard, showCardForm } = this.props;
        return (
            <div className="list">
                <h2>{list.name}</h2>
                
                <div className='list__card-holder'>
                    {_.filter(cards, {listId: list._id}).map((card) => {
                        return (
                            <Card
                                key={card.content}
                                card={card}
                            />)
                    })}

                </div>

                <div className='list__btn-holder'>
                    {cardFormVisible ?
                        <div onBlur={(hideCardForm)} className="list__add-card">
                            <div className="form-group">
                                <textarea onChange={handleNewCardContentChange} className='form-control' autoFocus='true' value={newCard.content}></textarea>
                            </div>
                            <button onClick={addCard} type='button' className="list__btn">
                                <figure className='list__icon'>
                                    <img src={addIcon} alt="Add Icon" />
                                </figure>
                                <span>Save</span>
                            </button>
                        </div>
                        :
                        <button onClick={showCardForm} className='list__btn'>
                            <figure className='list__icon'>
                                <img src={addIcon} alt="Add Icon" />
                            </figure>
                            <span>Add a Card</span>
                        </button>
                    }
                </div>
            </div>
        );
    }
}

export default List;