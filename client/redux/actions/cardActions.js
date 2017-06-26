import { CARD_ADD, CARD_GET, CARD_UPDATE, CARD_DELETE, CARD_SELECT } from '../actions/types';
import { getAxiosInstance } from '../config';

import store from '../store';

import axios from 'axios';

export function cardRequest(idList) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
        return instance.get(`/cards`, { params: { idList } })
            .then((response) => {
                dispatch({
                    type: CARD_GET,
                    cards: response.data
                });
            })
            .catch((err) => console.log(err));
    }
}

export function cardAdd(newCard) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
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

export function cardUpdate(updatedCard) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
        return instance.put('/cards', { updatedCard })
            .then((response) => {
                dispatch({
                    type: CARD_UPDATE,
                    card: updatedCard
                });
            })
            .catch((err) => console.log(err));
    }
}

export function cardSelect(card) {
    return store.dispatch({
        type: CARD_SELECT,
        card: card
    })
}