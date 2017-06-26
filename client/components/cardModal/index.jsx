import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, number, object } from 'prop-types';
import axios from 'axios';

import './cardModal.scss';

const moment = require('moment');

class CardModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {editableCard, handleCancelEditCard, handleContentChange, handleDueDateChange, handleSaveEditCard} = this.props;
        return (
            <div className="cardModal">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 cardModal__wrapper">
                            <header className="cardModal__header">
                                <button onClick={handleCancelEditCard} className="cardModal__btn">
                                    <span>X</span>
                                </button>
                            </header>
                            <main className="cardModal__main">
                                <div className="form-group">
                                    <textarea onChange={handleContentChange} rows="5" className="form-control" value={editableCard.content}></textarea>
                                </div>
                                <div className="form-group">
                                    <input onChange={(handleDueDateChange)} type="date" className="form-control" value={editableCard.dueDate}/>
                                </div>
                                <button onClick={handleSaveEditCard} className="cardModal__btn">
                                    <span>Save changes</span>
                                </button>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardModal;
