import merge from 'lodash/merge';

import { RECEIVE_STOCK } from '../actions/stocks_actions';

const noStocks = Object.freeze({
    allStocks: []
});

const stockReducer = (state = noStocks, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_STOCK:
            const stock = action.stock;
            return merge({}, state, { allStocks: stock });
        default:
            return state;
    }
};

export default stockReducer;