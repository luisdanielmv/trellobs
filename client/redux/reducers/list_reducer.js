import { LIST_ADD, LIST_GET, LIST_UPDATE, LIST_DELETE, LIST_SELECT } from '../actions/types';


const INITIAL_STATE = { list: []}

export default function (state = INITIAL_STATE, action) {
    let newState = {};
    switch (action.type) {
        case LIST_GET:
            return Object.assign({}, state, { list: action.lists });
        case LIST_ADD:
            newState = Object.assign({}, state, { list: [ ...state.list, action.list ] });
            return newState;
    }

    return state;
}