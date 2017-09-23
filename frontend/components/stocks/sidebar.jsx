import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="side-bar-container">
                <div className="side-bar-title">
                    Stock Tickers
                </div>
                <ul className="tickers-container">
                    <li className="indv-ticker-container">
                        <div className="company-name">
                            Ticker 1
                        </div>
                        <img className="delete-icon" src="../icons/delete-icon.png"/>
                    </li>
                    <li className="indv-ticker-container">
                        <div className="company-name">
                            Ticker 2
                        </div>
                        <img className="delete-icon" src="../icons/delete-icon.png" />
                    </li>
                    <li className="indv-ticker-container">
                        <div className="company-name">
                            Ticker 3
                        </div>
                        <img className="delete-icon" src="../icons/delete-icon.png" />
                    </li>
                    <li className="indv-ticker-container">
                        <div className="company-name">
                            Ticker 4
                        </div>
                        <img className="delete-icon" src="../icons/delete-icon.png" />
                    </li>
                    <li className="indv-ticker-container">
                        <div className="company-name">
                            Ticker 5
                        </div>
                        <img className="delete-icon" src="../icons/delete-icon.png" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;