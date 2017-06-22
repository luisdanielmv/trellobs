import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import boardReducer from './board_reducer';
import listReducer from './list_reducer';
import cardReducer from './card_reducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  boards: boardReducer,
  lists: listReducer,
  cards: cardReducer,
});

export default rootReducer; 