import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

import store from '../store';

import axios from 'axios';

export function loginRequest(userData) {
    let dispatch = store.dispatch;
    return (dispatch) => {
        return axios.post(`http://localhost:7777/api/auth`, userData)
            .then((response) => {
                localStorage.setItem('jwt', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                dispatch({
                    type: AUTH_USER,
                    user: response.data.user
                });
            })
            .catch((err) => console.log(err));
    }
}