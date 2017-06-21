import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import boardReducer from './board_reducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  boards: boardReducer,
});

export default rootReducer; 