//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import store from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
