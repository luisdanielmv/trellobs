import React, { Component } from 'react';
import { arrayOf, object, string } from 'prop-types';

import { Card } from '../../components/';

const moment = require('moment');

class CardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { card, handleCardClick, handleCardDrop, handleDragEnd, handleDragStart} = this.props;
        let user = JSON.parse(localStorage.getItem('user'));

        return (
            <Card
                card={card}
                user = { user }

                handleCardClick={handleCardClick}
                handleCardDrop={handleCardDrop}
                handleDragEnd={handleDragEnd}
                handleDragStart={handleDragStart}
            />
        );
    }
}

export default CardContainer;