import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = { errors: {}, message: '', content: '', authenticated: false, user: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      let newState = Object.assign({}, state, {error: '', message: '', authenticated: true, user: action.user});
      return newState;
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}