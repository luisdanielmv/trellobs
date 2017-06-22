import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';

import './board.scss';
import { ListContainer } from '../../containers/';
import addIcon from './img/add-Icon.svg';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { lists, user } = this.props;
        return (
            <div className="board__wrapper">
                <header className='board__header'>
                    <h1>This is the Project Title</h1>
                    {/*<div>
                        <button className='board__btn'>Calendar</button>
                        <button className='board__btn'>Show Menu</button>
                    </div>*/}
                </header>
                <main className="board__main">
                    <div className="board__list-holder">
                        {
                            lists.map((list) => {
                                return (<ListContainer key={list.name} list={list} user={user}/>)
                            })
                        }
                        <div className="list board__add-list">
                            <button className='list__btn'>
                                <figure className='list__icon'>
                                    <img src={addIcon} alt="Add Icon" />
                                </figure>
                                <span>Add a List</span>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Board;