import { BOARD_ADD, BOARD_GET, BOARD_UPDATE, BOARD_DELETE, BOARD_SELECT } from '../actions/types';


const INITIAL_STATE = { list: [], activeBoardId: '' }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case BOARD_GET:
            return Object.assign({}, state, { list: action.boards });;
        case BOARD_SELECT:
            return Object.assign({}, state, { activeBoardId: action.board._id });
    }

    return state;
}