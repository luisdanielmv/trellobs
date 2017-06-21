import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';

import './list.scss';
import addIcon from './img/add-Icon.svg';

import Card from '../card';

class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { list } = this.props;
        let {cards} = list;
        return (
            <div className="list">
                <h2>{list.name}</h2>
                <div className='list__card-holder'>
                    {cards.map((card) => {
                        return (
                            <Card
                                key={card.content}
                                card={card}
                            />)
                    })}
                </div>
                <button className='list__btn'>
                    <figure className='list__icon'>
                        <img src={addIcon} alt="Add Icon" />
                    </figure>
                    <span>Add a Card</span>
                </button>
            </div>
        );
    }
}

export default List;