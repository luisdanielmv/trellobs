import { CARD_ADD, CARD_GET, CARD_UPDATE, CARD_DELETE, CARD_SELECT } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function cardRequest(token, listID) {
    let dispatch = store.dispatch;
    return (dispatch) => {
        return axios.get(`http://localhost:7777/api/cards`, {params: {token, listID}})
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
            headers: { 'Authorization': 'Basic ' + localStorage.getItem('token') }
        });

        const self = this;
        return (dispatch) => {
        instance.post('/cards', {token, newCard})
            .then((response) => {
                dispatch({
                    type: CARD_ADD,
                    card: response.data
                });
            })
            .catch((err) => console.log(err));
        }

    // console.log('newCard', newCard);
    
    //     return axios.post(`http://localhost:7777/api/cards`, {token, newCard})
    //         .then((response) => {
    //             dispatch({
    //                 type: CARD_ADD,
    //                 card: response.data
    //             });
    //         })
    //         .catch((err) => console.log(err));
    // }
}