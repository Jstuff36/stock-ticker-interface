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
                currentlySearching={this.props.currentlySearching}
                flipSearch={this.props.flipSearch}
                newStock = {this.props.newStock}/>
                <div className="main-container">
                    <SideBarContainer/>
                    <StockGraphs
                    stockToGraph={this.props.stockToGraph}/>
                </div>
            </div>
        );
    }
}

export default DashBoard;