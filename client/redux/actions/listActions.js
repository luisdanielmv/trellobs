import { LIST_ADD, LIST_GET, LIST_UPDATE, LIST_DELETE, LIST_SELECT } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function listRequest(token, boardID) {
    let dispatch = store.dispatch;
    return (dispatch) => {
        return axios.get(`http://localhost:7777/api/lists`, {params: {token, boardID}})
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
            headers: { 'Authorization': 'Basic ' + localStorage.getItem('jwt') }
        });

        const self = this;
        return (dispatch) => {
        instance.post('/lists', {token, newList})
            .then((response) => {
                dispatch({
                    type: LIST_ADD,
                    list: response.data
                });
            })
            .catch((err) => console.log(err));
        }
}