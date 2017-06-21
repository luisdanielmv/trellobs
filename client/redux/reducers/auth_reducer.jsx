import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      console.log('oldstate', state);
      let newState = Object.assign({}, state, {error: '', message: '', authenticated: true, user: action.user});
      console.log('newstate', newState);
      return newState;
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}