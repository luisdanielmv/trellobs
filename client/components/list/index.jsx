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
        return (
            <div className="list">
                <h2>{list.name}</h2>
                <div className='list__card-holder'>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p>Mercedem aut nummos unde unde extricat, amaras</p>
                        <div className="details">
                            <span>Jun 25</span>
                            <div className='card__members'>
                                <div className='card__members--item'>
                                    CP
                            </div>
                                <div className='card__members--item'>
                                    RC
                            </div>
                            </div>
                        </div>
                    </div>
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