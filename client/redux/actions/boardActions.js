import { BOARD_ADD, BOARD_GET, BOARD_UPDATE, BOARD_DELETE, BOARD_SELECT } from '../actions/types';
import { getAxiosInstance } from '../config';

import store from '../store';

import axios from 'axios';

export function boardRequest() {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
        return instance.get(`/boards`)
            .then((response) => {
                dispatch({
                    type: BOARD_GET,
                    boards: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}

export function boardAdd(newBoard) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
        return instance.post('/boards', { newBoard })
            .then((response) => {
                dispatch({
                    type: BOARD_ADD,
                    board: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}

export function boardSelect(board) {
    return store.dispatch({
        type: BOARD_SELECT,
        board: board
    })
}