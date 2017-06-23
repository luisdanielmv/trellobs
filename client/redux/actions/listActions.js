import { LIST_ADD, LIST_GET, LIST_UPDATE, LIST_DELETE, LIST_SELECT } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function listRequest(token, boardID) {
    let dispatch = store.dispatch;
    var instance = axios.create({
        baseURL: 'http://localhost:7777/api',
        headers: { 'Authorization': localStorage.getItem('jwt') }
    });

    const self = this;
    return (dispatch) => {
        return instance.get(`/lists`, { params: { boardID } })
            .then((response) => {
                dispatch({
                    type: LIST_GET,
                    lists: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}

export function listAdd(token, newList) {
    let dispatch = store.dispatch;
    var instance = axios.create({
        baseURL: 'http://localhost:7777/api',
        headers: { 'Authorization': localStorage.getItem('jwt') }
    });

    const self = this;
    return (dispatch) => {
        return instance.post('/lists', { newList })
            .then((response) => {
                dispatch({
                    type: LIST_ADD,
                    list: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}