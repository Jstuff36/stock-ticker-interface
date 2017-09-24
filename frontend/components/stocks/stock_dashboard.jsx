import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';
import StockGraphs from './stock_graphs';
import SideBarContainer from './side_bar_container';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div>
                <NavBar
                newStock = {this.props.newStock}/>
                <div className="main_container">
                    <SideBarContainer/>
                    <StockGraphs
                    stockToGraph={this.props.stockToGraph}/>
                </div>
            </div>
        );
    }
}

export default DashBoard;