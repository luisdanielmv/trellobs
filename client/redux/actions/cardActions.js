import { CARD_ADD, CARD_GET, CARD_UPDATE, CARD_DELETE, CARD_SELECT } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function cardRequest(token, idList) {
    let dispatch = store.dispatch;
    var instance = axios.create({
        baseURL: 'http://localhost:7777/api',
        headers: { 'Authorization': localStorage.getItem('jwt') }
    });

    const self = this;
    return (dispatch) => {
        return instance.get(`/cards`, { params: { token, idList } })
            .then((response) => {
                dispatch({
                    type: CARD_GET,
                    cards: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}

export function cardAdd(token, newCard) {
    let dispatch = store.dispatch;
    var instance = axios.create({
        baseURL: 'http://localhost:7777/api',
        headers: { 'Authorization': localStorage.getItem('jwt') }
    });

    const self = this;
    return (dispatch) => {
        return instance.post('/cards', { newCard })
            .then((response) => {
                dispatch({
                    type: CARD_ADD,
                    card: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}