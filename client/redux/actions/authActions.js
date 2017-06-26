import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

import { getAxiosInstance } from '../config';

import store from '../store';

export function loginRequest(userData) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    return () => {
        return instance.post(`/auth`, userData)
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

export function userSignUpRequest(userData) {
    const dispatch = store.dispatch;
    const instance = getAxiosInstance();

    console.log('userData', userData);

    return () => {
        return instance.post(`/register`, {userData})
            .then(
                (response) => {
                    console.log('response', response);
                    localStorage.setItem('jwt', response.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    dispatch({
                        type: AUTH_USER,
                        user: response.data.user
                    });
                },
                (err) => {
                    console.log(err);
                }
            )
            .catch((err) => console.log(err));
    }
}