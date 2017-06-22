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