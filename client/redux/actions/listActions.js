import { LIST_ADD, LIST_GET, LIST_UPDATE, LIST_DELETE, LIST_SELECT } from '../actions/types';
import { getAxiosInstance } from '../config';

import store from '../store';

import axios from 'axios';

export function listRequest(boardID) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
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

export function listAdd(newList) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
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

export function listSelect(list) {
    return store.dispatch({
        type: LIST_SELECT,
        list: list
    })
}