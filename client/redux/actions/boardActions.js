import { BOARD_ADD, BOARD_GET, BOARD_UPDATE, BOARD_DELETE } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function boardRequest(token) {
    let dispatch = store.dispatch;
    return (dispatch) => {
        return axios.get(`http://localhost:7777/api/boards`, {params: {token}})
            .then((response) => {
                console.log('boards response', response.data);
                dispatch({
                    type: BOARD_GET,
                    boards: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}