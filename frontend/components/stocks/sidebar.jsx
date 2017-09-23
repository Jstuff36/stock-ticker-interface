import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStocks: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.allStocks !== this.state.allStocks) {
            console.log(nextProps);
            this.setState({
               allStocks: nextProps.allStocks 
            });
        }
    }

    render() {
        const stocks = this.state.allStocks;
        console.log(this.state);
        return(
            <div className="side-bar-container">
                <div className="side-bar-title">
                    Stock Tickers
                </div>
                <ul className="tickers-container">
                    {this.state.allStocks ? 
                    Object.keys(stocks).map((tickerStymbol, idx) => (
                        <li 
                        key={idx}
                        className="indv-ticker-container">
                            <div className="company-name">
                                {tickerStymbol}
                            </div>
                            <img className="delete-icon" src="../icons/delete-icon.png"/>
                        </li>
                    ))
                    :
                    <li>
                        No stocks
                    </li>
                    }
                </ul>
            </div>
        );
    }
}

export default SideBar;