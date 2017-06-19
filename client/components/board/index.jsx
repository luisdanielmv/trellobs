import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';

import './board.scss';
import { ListContainer } from '../../containers/';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {
                    name: 'Lista1'
                },
                {
                    name: 'Lista2'
                },
                {
                    name: 'Lista3'
                },
                {
                    name: 'Lista4'
                },
                {
                    name: 'Lista5'
                },
                {
                    name: 'Lista6'
                },
                {
                    name: 'Lista7'
                }
            ]
        }
    }



    render() {
        let { lists } = this.state;
        return (
            <div className="board__wrapper">
                <header className='board__header'>
                    <h1>This is the Project Title</h1>
                </header>
                <main className="board__main">
                    {
                        lists.map((list) => {
                            return (<ListContainer key={list.name} list={list}/>)
                        })
                    }
                </main>
            </div>
        );
    }
}

export default Board;