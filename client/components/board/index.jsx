import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object } from 'prop-types';

import './board.scss';
import { ListContainer } from '../../containers/';
import addIcon from './img/add-Icon.svg';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {
                    name: 'Lista1',
                    cards: [
                        {
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat cupiditate natus vel necessitatibus exercitationem, iusto dolor numquam distinctio quia voluptate, eveniet magnam tenetur placeat consectetur ex deleniti assumenda dignissimos.'
                        },
                        {
                            content: 'Card2'
                        },
                        {
                            content: 'Card3'
                        },
                        {
                            content: 'Card4'
                        },
                        {
                            content: 'Card5'
                        },
                        {
                            content: 'Card6'
                        },
                        {
                            content: 'Card7'
                        },
                        {
                            content: 'Card8'
                        },
                        {
                            content: 'Card9'
                        }
                    ]
                },
                {
                    name: 'Lista5',
                    cards: [
                        {
                            content: 'Card1'
                        },
                        {
                            content: 'Card2'
                        },
                        {
                            content: 'Card3'
                        }
                    ]
                },
                {
                    name: 'Lista6',
                    cards: [
                        {
                            content: 'Card1'
                        },
                        {
                            content: 'Card2'
                        }
                    ]
                },
                {
                    name: 'Lista7',
                    cards: [
                        {
                            content: 'Card1'
                        }
                    ]
                },
                {
                    name: 'Lista2',
                    cards: [
                        {
                            content: 'Card1'
                        },
                        {
                            content: 'Card2'
                        },
                        {
                            content: 'Card3'
                        },
                        {
                            content: 'Card4'
                        },
                        {
                            content: 'Card5'
                        },
                        {
                            content: 'Card6'
                        },
                        {
                            content: 'Card7'
                        },
                        {
                            content: 'Card8'
                        }
                    ]
                },
                {
                    name: 'Lista3',
                    cards: [
                        {
                            content: 'Card1'
                        },
                        {
                            content: 'Card2'
                        },
                        {
                            content: 'Card3'
                        },
                        {
                            content: 'Card4'
                        },
                        {
                            content: 'Card5'
                        },
                        {
                            content: 'Card6'
                        },
                        {
                            content: 'Card7'
                        }
                    ]
                },
                {
                    name: 'Lista4',
                    cards: [
                        {
                            content: 'Card1'
                        },
                        {
                            content: 'Card2'
                        },
                        {
                            content: 'Card3'
                        },
                        {
                            content: 'Card4'
                        },
                        {
                            content: 'Card5'
                        },
                        {
                            content: 'Card6'
                        }
                    ]
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
                    {/*<div>
                        <button className='board__btn'>Calendar</button>
                        <button className='board__btn'>Show Menu</button>
                    </div>*/}
                </header>
                <main className="board__main">
                    <div className="board__list-holder">
                        {
                            lists.map((list) => {
                                return (<ListContainer key={list.name} list={list}/>)
                            })
                        }
                        <div className="list">
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