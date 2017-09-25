
import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk, logger];

let store = compose(
    applyMiddleware(...middlewares),
    autoRehydrate()
)(createStore)(rootReducer);

persistStore(store);

export default store;