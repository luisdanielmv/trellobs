import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object} from 'prop-types';

import './home.scss';
import addIcon from './img/add-Icon.svg';

class Home extends Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        let {boards} = this.props;
        console.log('prop-boards', boards);
        return (
            <div className="home__wrapper container">
                <header className='home__header'>
                    <h1>Personal Boards</h1>
                </header>
                <main className="home__main row">
                    <div className="col-xs-12 div col-sm-4 col-md-3">
                        <div className="home__board">
                            <span></span>
                        </div>
                    </div>
                    {/*<div className="home__list-holder">
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
                                <span>Add a Board</span>
                            </button>
                        </div>
                    </div>*/}
                </main>
            </div>
        );
    }
}

export default Home;