import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, number, object } from 'prop-types';
import axios from 'axios';

import './card.scss';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {card} = this.props;
        return (
            <div className="card">
                <p>{card.content}</p>
                <div className="details">
                    <span>Jun 25</span>
                    <div className='card__members'>
                        <div className='card__members--item'>CP</div>
                        <div className='card__members--item'>RC</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
