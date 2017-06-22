import { CARD_ADD, CARD_GET, CARD_UPDATE, CARD_DELETE, CARD_SELECT } from '../actions/types';


const INITIAL_STATE = { list: []}

export default function (state = INITIAL_STATE, action) {
    let newState = {};
    switch (action.type) {
        case CARD_GET:
            newState = Object.assign({}, state, { list: action.cards });
            return newState;
        case CARD_ADD:
            newState = Object.assign({}, state, { list: [ ...state.list, action.card ] });
            return newState;
    }

    return state;
}