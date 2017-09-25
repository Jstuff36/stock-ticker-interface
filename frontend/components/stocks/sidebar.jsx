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

    componentDidMount() {
        if (this.props.allStocks) {
            this.setState({ allStocks: this.props.allStocks });
        }
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
            this.props.newStockToGraph(stock);
        };
    }

    removeStock(stock) {
        return (e) => {
            e.stopPropagation();
            this.props.deleteStock(stock);
        };
    }

    render() {
        const stocks = this.state.allStocks;
        const stockToGraph = this.props.stockToGraph;
        return(
            <div className="side-bar-container">
                <div className="side-bar-title">
                    Stocks
                </div>
                <ul className="tickers-container">
                    {!this.state.allStocks || Object.keys(this.state.allStocks).length === 0 ? 
                    <li
                        className="no-tickers">
                        No stocks available
                    </li>
                    :
                    Object.keys(stocks).map((tickerSymbol, idx) => (
                        <li 
                        key={idx}
                            onClick={this.graphStock(stocks[tickerSymbol])}
                            className={stockToGraph && tickerSymbol === stockToGraph['Meta Data']['2. Symbol'] ? "indv-ticker-container active" : "indv-ticker-container"}>
                            <div className="company-name"
                            >
                                {tickerSymbol}
                            </div>
                            <img 
                                onClick={this.removeStock(stocks[tickerSymbol])}
                                className="delete-icon" src="./icons/delete-icon.png"/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

export default SideBar;