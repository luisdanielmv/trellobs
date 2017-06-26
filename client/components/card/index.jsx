import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, number, object } from 'prop-types';
import axios from 'axios';

import './card.scss';

const moment = require('moment');

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {card, user, handleCardClick, handleDragStart} = this.props;
        return (
            <div className="card" draggable='true' onClick={(e)=>{handleCardClick(card)}} onDragStart={(e)=>{handleDragStart(card, e.target.offsetHeight)}}>
                <p>{card.content}</p>
                <div className="details">
                    <span>{moment(card.dueDate).format('MMM DD')}</span>
                    <div className='card__members'>
                        <div className='card__members--item'>{user.firstName.toUpperCase().charAt(0)}{user.lastName.toUpperCase().charAt(0)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
