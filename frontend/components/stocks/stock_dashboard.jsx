import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';
import SideBar from './sidebar';
import StockGraphs from './stock_graphs';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar
                newStock = {this.props.newStock}/>
                <div className="main_container">
                    <SideBar/>
                    <StockGraphs/>
                </div>
            </div>
        );
    }
}

export default DashBoard;