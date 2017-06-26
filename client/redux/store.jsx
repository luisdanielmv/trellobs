import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';

import {default as rootReducer} from './reducers/';

const INITIAL_STATE = {
    auth: {
        errors: {}, message: '', authenticated: true, user: {}
    },
    boards: {list: [], activeBoard: ''},
    lists: {list: [], dragTargetId:''},
    cards: {list: [], draggedCard: '', editableCard: ''}
}

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;
