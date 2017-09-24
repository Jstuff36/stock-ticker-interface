import merge from 'lodash/merge';

import { 
    RECEIVE_STOCK,
    RECEIVE_STOCK_TO_GRAPH,
    REMOVE_SINGLE_STOCK
 } from '../actions/stocks_actions';

const noStocks = Object.freeze({
    allStocks: {},
    stockToGraph: null
});

const stockReducer = (state = noStocks, action) => {
    Object.freeze(state);
    let newState;
    let symbol;
    switch (action.type) {
        case RECEIVE_STOCK:
            symbol = action.stock["Meta Data"]['2. Symbol'];
            return merge({}, state, { 
                stockToGraph: action.stock,
                allStocks: {
                    [symbol]: action.stock
                }
             });
        case RECEIVE_STOCK_TO_GRAPH:
             newState = merge({}, state);
             newState['stockToGraph'] = action.stock;
             return newState;
        case REMOVE_SINGLE_STOCK:
             newState = merge({}, state);
             symbol = action.stock["Meta Data"]['2. Symbol'];
             delete newState.allStocks[symbol];
             return newState;

        default:
            return state;
    }
};

export default stockReducer;