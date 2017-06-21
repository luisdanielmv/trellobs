import { BOARD_ADD, BOARD_GET, BOARD_UPDATE, BOARD_DELETE } from '../actions/types';


const INITIAL_STATE = { boards: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case BOARD_GET:
            console.log('oldState', state);
            let newState = Object.assign({}, state, { boards: action.boards });
            console.log('newState', newState);
            return newState;
    }

    return state;
}