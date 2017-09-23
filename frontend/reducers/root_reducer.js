import { combineReducers } from 'redux';

import stockReducer from './stock_reducer';

const RootReducer = combineReducers({
    stocks: stockReducer
});

export default RootReducer;