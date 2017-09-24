
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

// const configureStore = (preloadedState = {}) => {
    // return store;
    // return createStore(
    //     rootReducer,
    //     preloadedState,
    //     applyMiddleware(...middlewares)
    // );
// };



export default store;