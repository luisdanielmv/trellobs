import { BOARD_ADD, BOARD_GET, BOARD_UPDATE, BOARD_DELETE, BOARD_SELECT } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function boardRequest(token) {
    let dispatch = store.dispatch;
    return (dispatch) => {
        return axios.get(`http://localhost:7777/api/boards`, {params: {token}})
            .then((response) => {
                dispatch({
                    type: BOARD_GET,
                    boards: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}

export function boardAdd(token, newBoard) {
    console.log(newBoard);
    let dispatch = store.dispatch;
    var instance = axios.create({
            baseURL: 'http://localhost:7777/api',
            headers: { 'Authorization': 'Basic ' + localStorage.getItem('jwt') }
        });

        const self = this;
        return (dispatch) => {
        instance.post('/boards', {token, newBoard})
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