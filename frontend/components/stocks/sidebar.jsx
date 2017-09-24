import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStocks: null
        };

        this.graphStock = this.graphStock.bind(this);
        this.removeStock = this.removeStock.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.allStocks !== this.state.allStocks) {
            this.setState({
               allStocks: nextProps.allStocks 
            });
        }
    }

    graphStock(stock) {
        return () => {
            this.props.stockToGraph(stock);
        };
    }

    removeStock(stock) {
        return () => {
            this.props.deleteStock(stock);
        };
    }

    render() {
        const stocks = this.state.allStocks;
        // console.log(Object.keys(this.state.allStocks).length === 0 );
        return(
            <div className="side-bar-container">
                <div className="side-bar-title">
                    Stock Tickers
                </div>
                <ul className="tickers-container">
                    {!this.state.allStocks || Object.keys(this.state.allStocks).length === 0 ? 
                    <li
                        className="no-tickers">
                        No stocks
                    </li>
                    :
                    Object.keys(stocks).map((tickerSymbol, idx) => (
                        <li 
                        key={idx}
                        className="indv-ticker-container">
                            <div className="company-name"
                                onClick={this.graphStock(stocks[tickerSymbol])}
                            >
                                {tickerSymbol}
                            </div>
                            <img 
                                onClick={this.removeStock(stocks[tickerSymbol])}
                                className="delete-icon" src="../icons/delete-icon.png"/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

export default SideBar;