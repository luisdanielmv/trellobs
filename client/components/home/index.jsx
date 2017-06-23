import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object, func } from 'prop-types';

import './home.scss';
import addIcon from '../home/img/add-Icon.svg';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        boards: arrayOf(object),
        boardSelect: func.isRequired
    }

    render() {
        let { boards, boardSelect, boardFormVisible, newBoard, showNewBoardForm, hideNewBoardForm, handleNewBoardNameChange, addBoard } = this.props;
        return (
            <div className="home__wrapper container">
                <header className='home__header'>
                    <h1>Personal Boards</h1>
                </header>
                <main className="home__main row">
                    {
                        !!boards && boards.map((board) => {
                            return (
                                <div key={board._id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 home__board-holder">
                                    <div onClick={() => boardSelect(board)} className="home__board">
                                        <span>{board.name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 home__board-holder">
                        <div className="home__board home__board-add">
                            {boardFormVisible ?
                                <div onBlur={(hideNewBoardForm)}>
                                    <div className="form-group">
                                        <input onChange={handleNewBoardNameChange} className='form-control' autoFocus='true' value={newBoard.name}></input>
                                    </div>
                                    <button onClick={addBoard} type='button' className='home__btn'>
                                        <figure className='home__icon'>
                                            <img src={addIcon} alt="Add Icon" />
                                        </figure>
                                        <span>Save</span>
                                    </button>
                                </div>
                                :
                                <button onClick={showNewBoardForm} className='home__btn'>
                                    <figure className='home__icon'>
                                        <img src={addIcon} alt="Add Icon" />
                                    </figure>
                                    <span>Add a Board</span>
                                </button>
                            }
                        </div>
                    </div>
                </main>
            </div >
        );
    }
}

export default Home;