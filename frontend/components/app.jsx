import React from 'react';
import StockContainer from './stocks/stock_container';
import {
    Route
} from 'react-router-dom';

const App = () => (
    <div>
        <Route exact path="/" component={StockContainer} />
    </div>
);

export default App;