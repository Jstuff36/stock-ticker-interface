//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
