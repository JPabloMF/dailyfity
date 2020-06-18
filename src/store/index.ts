import { createStore, combineReducers } from 'redux';

import { REDUX_DEVTOOLS } from '../utils/constants';

/* reducers */
import { global } from './reducers';

const store = createStore(
  combineReducers({ global: global }),
  REDUX_DEVTOOLS
);

export default store;
