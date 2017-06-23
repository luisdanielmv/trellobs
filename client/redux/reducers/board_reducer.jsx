import { BOARD_ADD, BOARD_GET, BOARD_UPDATE, BOARD_DELETE, BOARD_SELECT } from '../actions/types';


const INITIAL_STATE = { list: [], activeBoard: '' }

export default function (state = INITIAL_STATE, action) {
    let newState = {};
    switch (action.type) {
        case BOARD_GET:
            return Object.assign({}, state, { list: action.boards });;
        case BOARD_SELECT:
            return Object.assign({}, state, { activeBoard: action.board });
        case BOARD_ADD:
            newState = Object.assign({}, state, { list: [ ...state.list, action.board ] });
            return newState;
    }

    return state;
}