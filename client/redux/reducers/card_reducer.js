import { CARD_ADD, CARD_GET, CARD_UPDATE, CARD_DELETE, CARD_SELECT } from '../actions/types';


const INITIAL_STATE = { list: [], draggedCard: '', editableCard: '' }

export default function (state = INITIAL_STATE, action) {
    let newState = {};
    switch (action.type) {
        case CARD_ADD:
            newState = Object.assign({}, state, { list: [...state.list, action.card] });
            return newState;
        case CARD_GET:
            newState = Object.assign({}, state, { list: action.cards });
            return newState;
        case CARD_UPDATE:
            newState = Object.assign({}, state, { list: [...state.list] });
            const index = _.findIndex(newState.list, { _id: action.card._id });
            newState.list.splice(index, 1, action.card);
            return newState;
        case CARD_SELECT:
            newState = Object.assign({}, state, { draggedCard: action.card });
            return newState;
        
    }

    return state;
}