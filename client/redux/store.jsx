import { createStore } from 'redux';

import {default as rootReducer} from './reducers/';

const store = createStore(rootReducer);

export default store;