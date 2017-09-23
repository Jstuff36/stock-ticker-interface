import React from 'react';
import TickerContainer from './stocks/stock_container';
import {
    Route
} from 'react-router-dom';

const App = () => (
    <div>
        <Route exact path="/" component={TickerContainer} />
    </div>
);

export default App;